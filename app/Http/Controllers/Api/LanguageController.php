<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\Language\FilterLanguageCollection;
use App\Services\LanguageService;
use Illuminate\Http\Request;

class LanguageController extends Controller
{
    protected LanguageService $languageService;

    public function __construct(LanguageService $languageService)
    {
        $this->languageService = $languageService;
    }

    public function filter(Request $request): FilterLanguageCollection
    {
        $languages = $this->languageService->filter($request->query());

        return new FilterLanguageCollection($languages);
    }
}
