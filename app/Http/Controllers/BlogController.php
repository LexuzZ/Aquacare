<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\File as FileFacade;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;

class BlogController extends Controller
{
    public function allPost()
    {
        $blogs = Blog::latest()->get();
        return Inertia::render('Blog', ['blogs' => $blogs]);
    }

    public function createPost()
    {
        return Inertia::render('CreateBlog');
    }

    public function createBlog(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'content' => 'required',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:10240'
        ]);

        $request['slug'] = $this->createSlug($request->title);
        $image = $request->file('image');
        $blog = $this->saveBlog($request->all());

        $this->saveImage($image, $blog);

    }

    private function createSlug(string $title): string
    {
        return Str::slug($title);
    }

    private function saveBlog(array $data)
    {
        return Blog::create(
            $data
        );
    }

    private function saveImage(array|UploadedFile $file, Blog $blog): void
    {
        $file->store('blogs');
        $path = Storage::path('blogs/' . $file->hashName());
        $url = Storage::url('blogs/' . $file->hashName());
        $this->replaceImage([
            'new_path' => $path,
            'new_url' => $url
        ], $blog);
    }

    private function replaceImage(array $data, Blog $blog): void
    {
        $blog->update([
            'image_path' => $data['new_path'],
            'image_url' => $data['new_url']
        ]);
    }

    private function deleteImage($path): void
    {
        if (FileFacade::exists($path)) {
            FileFacade::delete($path);
        }
    }
}