<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\Feedback;
use App\Models\Report;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ReportController extends Controller
{
    public function reportList()
    {
        $user = Auth::user();
        switch ($user->roles->name) {
            case 'admin':
                $reports = Report::latest()->get();
                break;
            case 'petugas':
                $reports = Report::where('status', 'approved')->get();
                break;
            default:
                $reports = $user->reports()->get();
                break;
        }

        return Inertia::render('Report', [
            'reports' => $reports
        ]);
    }

    public function blogList()
    {
        $blogs = Blog::all();
        return Inertia::render('Homepage', ['blogs' => $blogs]);
    }

    public function reportPost(Request $request)
    {
        $request->validate([
            'rasa' => 'required',
            'suhu' => 'required',
            'kekentalan' => 'required',
            'bau' => 'required',
            'warna' => 'required',
            'keasaman' => 'required',
            'detail' => 'required',
            'long' => 'required',
            'lat' => 'required'
        ]);

        $user_id = auth()->user()->id;

        $this->createReport(array_merge($request->all(), ['user_id' => $user_id]));

        return redirect()->back()->with('message', 'Laporan berhasil dikirim');
    }

    public function updateReportPut(Request $request, $id)
    {
        $data = $request->all();
        $data['id'] = $id;
        $this->updateReport($data);
        return redirect()->back()->with('message', 'Laporan berhasil diupdate');
    }

    public function feedbackPost(Request $request)
    {
        $request->validate([
            'message' => 'required',
            'report_id' => 'required'
        ]);

        $user_id = auth()->user()->id;
        $this->createFeedback(array_merge($request->all(), ['user_id' => $user_id]));

        return redirect()->back()->with('message', 'Feedback berhasil dikirim');
    }

    public function reportDetail($id)
    {
        $report = Report::with(['feedback' => function ($query) {
            $query->orderBy('created_at', 'desc');
        }, 'user', 'feedback.user'])->where('id', $id)->first();
        return Inertia::render('ReportDetail', [
            'report' => $report
        ]);
    }

    private function createReport(array $data)
    {
        try {
            Report::create([
                'rasa' => $data['rasa'],
                'suhu' => $data['suhu'],
                'kekentalan' => $data['kekentalan'],
                'warna' => $data['warna'],
                'bau' => $data['bau'],
                'keasaman' => $data['keasaman'],
                'detail' => $data['detail'],
                'status' => $data['status'] ?? 'pending',
                'user_id' => $data['user_id'],
                'long' => $data['long'],
                'lat' => $data['lat']
            ]);
        } catch (\Exception $e) {
            throw new $e->getMessage();
        }
    }

    private function updateReport($data)
    {
        try {
            Report::find($data['id'])->update($data);
        } catch (\Exception $e) {
            throw new $e->getMessage();
        }
    }

    private function createFeedback(array $data)
    {
        try {
            Feedback::create($data);
        } catch (\Exception $e) {
            throw $e;
        }
    }
}
