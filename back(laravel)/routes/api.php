<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/


Route::get('/user', [\App\Http\Controllers\HomeController::class, 'getUser']);
Route::get('/user/create', [\App\Http\Controllers\HomeController::class, 'create']) ->name('user.create');
Route::post('/user', [\App\Http\Controllers\HomeController::class, 'store']) ->name('user.store');
Route::get('/user/{id}', [\App\Http\Controllers\HomeController::class, 'show']) ->name('user.show');
Route::get('/user/{id}/edit', [\App\Http\Controllers\HomeController::class, 'edit']) ->name('user.edit');
Route::put('/user/{id}', [\App\Http\Controllers\HomeController::class, 'update']) ->name('user.update');
Route::delete('/user/{id}', [\App\Http\Controllers\HomeController::class, 'destroy']) ->name('user.destroy');


Route::get('/category', [\App\Http\Controllers\CategoryController::class, 'index']);
Route::get('/category/create', [\App\Http\Controllers\CategoryController::class, 'create']) ->name('category.create');
Route::post('/category', [\App\Http\Controllers\CategoryController::class, 'store']) ->name('category.store');
Route::get('/category/{id}', [\App\Http\Controllers\CategoryController::class, 'show']) ->name('category.show');
Route::get('/category/{id}/edit', [\App\Http\Controllers\CategoryController::class, 'edit']) ->name('category.edit');
Route::put('/category/{id}', [\App\Http\Controllers\CategoryController::class, 'update']) ->name('category.update');
Route::delete('/category/{id}', [\App\Http\Controllers\CategoryController::class, 'destroy']) ->name('category.destroy');

Route::get('/clothing', [\App\Http\Controllers\ClothingController::class, 'index']);
Route::get('/clothing/create', [\App\Http\Controllers\ClothingController::class, 'create']) ->name('clothing.create');
Route::post('/clothing', [\App\Http\Controllers\ClothingController::class, 'store']) ->name('clothing.store');
Route::get('/clothing/{id}', [\App\Http\Controllers\ClothingController::class, 'show']) ->name('clothing.show');
Route::get('/clothing/{id}/edit', [\App\Http\Controllers\ClothingController::class, 'edit']) ->name('clothing.edit');
Route::put('/clothing/{id}', [\App\Http\Controllers\ClothingController::class, 'update']) ->name('clothing.update');
Route::delete('/clothing/{id}', [\App\Http\Controllers\ClothingController::class, 'destroy']) ->name('clothing.destroy');

Route::get('/product', [\App\Http\Controllers\ProductController::class, 'index']);
Route::get('/product/create', [\App\Http\Controllers\ProductController::class, 'create']) ->name('product.create');
Route::post('/product', [\App\Http\Controllers\ProductController::class, 'store']) ->name('product.store');
Route::get('/product/{id}', [\App\Http\Controllers\ProductController::class, 'show']) ->name('product.show');
Route::get('/product/{id}/edit', [\App\Http\Controllers\ProductController::class, 'edit']) ->name('product.edit');
Route::put('/product/{id}', [\App\Http\Controllers\ProductController::class, 'update']) ->name('product.update');
Route::delete('/product/{id}', [\App\Http\Controllers\ProductController::class, 'destroy']) ->name('product.destroy');

Route::get('/trash', [\App\Http\Controllers\TrashController::class, 'index']);
Route::get('/trash/create', [\App\Http\Controllers\TrashController::class, 'create']) ->name('trash.create');
Route::post('/trash', [\App\Http\Controllers\TrashController::class, 'store']) ->name('trash.store');
Route::get('/trash/{id}', [\App\Http\Controllers\TrashController::class, 'show']) ->name('trash.show');
Route::get('/trash/{id}/edit', [\App\Http\Controllers\TrashController::class, 'edit']) ->name('trash.edit');
Route::put('/trash/{id}', [\App\Http\Controllers\TrashController::class, 'update']) ->name('trash.update');
Route::delete('/trash/{id}', [\App\Http\Controllers\TrashController::class, 'destroy']) ->name('trash.destroy');

Route::get('/order', [\App\Http\Controllers\OrderController::class, 'index']);
Route::get('/order/create', [\App\Http\Controllers\OrderController::class, 'create']) ->name('order.create');
Route::post('/order', [\App\Http\Controllers\OrderController::class, 'store']) ->name('order.store');
Route::get('/order/{id}', [\App\Http\Controllers\OrderController::class, 'show']) ->name('order.show');
Route::get('/order/{id}/edit', [\App\Http\Controllers\OrderController::class, 'edit']) ->name('order.edit');
Route::put('/order/{id}', [\App\Http\Controllers\OrderController::class, 'update']) ->name('order.update');
Route::delete('/order/{id}', [\App\Http\Controllers\OrderController::class, 'destroy']) ->name('order.destroy');

Route::get('/clothedit', [\App\Http\Controllers\ClothEditController::class, 'index']);
Route::get('/clothedit/create', [\App\Http\Controllers\ClothEditController::class, 'create']) ->name('clothedit.create');
Route::post('/clothedit', [\App\Http\Controllers\ClothEditController::class, 'store']) ->name('clothedit.store');
Route::get('/clothedit/{id}', [\App\Http\Controllers\ClothEditController::class, 'show']) ->name('clothedit.show');
Route::get('/clothedit/{id}/edit', [\App\Http\Controllers\ClothEditController::class, 'edit']) ->name('clothedit.edit');
Route::put('/clothedit/{id}', [\App\Http\Controllers\ClothEditController::class, 'update']) ->name('clothedit.update');
Route::delete('/clothedit/{id}', [\App\Http\Controllers\ClothEditController::class, 'destroy']) ->name('clothedit.destroy');

Route::get('/categoryedit', [\App\Http\Controllers\CategoryEditController::class, 'index']);
Route::get('/categoryedit/create', [\App\Http\Controllers\CategoryEditController::class, 'create']) ->name('categoryedit.create');
Route::post('/categoryedit', [\App\Http\Controllers\CategoryEditController::class, 'store']) ->name('categoryedit.store');
Route::get('/categoryedit/{id}', [\App\Http\Controllers\CategoryEditController::class, 'show']) ->name('categoryedit.show');
Route::get('/categoryedit/{id}/edit', [\App\Http\Controllers\CategoryEditController::class, 'edit']) ->name('categoryedit.edit');
Route::put('/categoryedit/{id}', [\App\Http\Controllers\CategoryEditController::class, 'update']) ->name('categoryedit.update');
Route::delete('/categoryedit/{id}', [\App\Http\Controllers\CategoryEditController::class, 'destroy']) ->name('categoryedit.destroy');

Route::get('/books', [\App\Http\Controllers\BookController::class, 'index']);
Route::get('/books/{id}', [\App\Http\Controllers\BookController::class, 'show']);
Route::post('/books', [\App\Http\Controllers\BookController::class, 'store']);
Route::patch('/books/{id}', [\App\Http\Controllers\BookController::class, 'update']);
Route::delete('/books/{id}', [\App\Http\Controllers\BookController::class, 'destroy']);

Route::post('/register', [AuthController::class, 'register'])->name('api_register');
Route::post('/login', [AuthController::class, 'login'])->name('api_login');
Route::post('/logout', [AuthController::class, 'logout'])->name('api_logout');

Route::middleware('auth:api')->group(function () {
    Route::post('/send', [EmailMessageController::class, 'sendMail'])->name('api_send');
});
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

