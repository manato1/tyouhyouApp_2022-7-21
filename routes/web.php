<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use App\Models\Invoice_item;
use App\Models\Invoice;
use App\Models\Quotation_item;
use App\Models\Quotation;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();

// 
// ユーザー
// 
//　見積書、請求書一覧or作成ボタン
Route::get('/', [App\Http\Controllers\HomeController::class, 'home'])->name('home');

// 作成
Route::get('/mitumorisho/create', [App\Http\Controllers\HomeController::class, 'create_mitumorisho'])->name('create_mitumorisho');
Route::get('/seikyusho/create', [App\Http\Controllers\HomeController::class, 'create_seikyusho'])->name('create_seikyusho');

// 一覧
Route::get('/mitumorisho', [App\Http\Controllers\HomeController::class, 'list_mitumorisho'])->name('list_mitumorisho');
Route::get('/seikyusho', [App\Http\Controllers\HomeController::class, 'list_seikyusho'])->name('list_seikyusho');

// 編集
Route::get('/mitumorisho/edit/{id}', [App\Http\Controllers\HomeController::class, 'edit_mitumorisho'])->name('edit_mitumorisho');
Route::get('/seikyusho/edit/{id}', [App\Http\Controllers\HomeController::class, 'edit_seikyusho'])->name('edit_seikyusho');

// pdf化
Route::post('/mitumorisho_pdf', function(){
    $from_before = $_POST["from"];
    $search = array(" ","　"); 
    $from = str_replace($search,"\n",$from_before);
    $for_before = $_POST["for_for"];
    $search = array(" ","　"); 
    $for = str_replace($search,"\n",$for_before);

    $remarks_before = $_POST["remarks"];
    $search = array(" ","　"); 
    $remarks = str_replace($search,"\n",$remarks_before);
    $tt1 = $_POST["date"];
    $ts1 = strtotime($tt1);
    $date = date('Y年m月d日',$ts1);
    $tt2 = $_POST["deadline"];
    $ts2 = strtotime($tt2);
    $deadline = date('Y年m月d日',$ts2);

    if($_POST["totalamount"]){
        $ta = number_format($_POST["totalamount"]);
    }else{
        $ta = "";
    }
    if($_POST["subtotal"]){
        $st = number_format($_POST["subtotal"]);
    }else{
        $st = "";
    }
    if($_POST["taxamount"]){
        $taa = number_format($_POST["taxamount"]);
    }else{
        $taa = "";
    }

    $data = [            
        "from" => $from,
        "for" => $for,
        "date" => $date,
        "deadline" => $deadline,
        "number" => $_POST["number"],
        "subject" => $_POST["subject"],
        "remarks" => $remarks,

        "totalamount" => $ta,
        "subtotal" => $st,
        "taxamount" => $taa,
        "total_1" => $_POST["total1"],
        "total_2" => $_POST["total2"],
        "total_3" => $_POST["total3"],
        "total_4" => $_POST["total4"],
        "total_5" => $_POST["total5"],
        "total_6" => $_POST["total6"],
        "total_7" => $_POST["total7"],
        "total_8" => $_POST["total8"],
        "total_9" => $_POST["total9"],
        "total_10" => $_POST["total10"],
        "total_11" => $_POST["total11"],
        "total_12" => $_POST["total12"],
        "total_13" => $_POST["total13"],
        "total_14" => $_POST["total14"],
        "total_15" => $_POST["total15"],
        "total_16" => $_POST["total16"],
        "total_17" => $_POST["total17"],
        "total_18" => $_POST["total18"],

        "content_1" => $_POST["content_1"],
        "unit_price_1" => $_POST["unit_price_1"],
        "quantity_1" => $_POST["quantity_1"],
        "rate_1" => $_POST["rate_1"],

        "content_2" => $_POST["content_2"],
        "unit_price_2" => $_POST["unit_price_2"],
        "quantity_2" => $_POST["quantity_2"],
        "rate_2" => $_POST["rate_2"],

        "content_3" => $_POST["content_3"],
        "unit_price_3" => $_POST["unit_price_3"],
        "quantity_3" => $_POST["quantity_3"],
        "rate_3" => $_POST["rate_3"],

        "content_4" => $_POST["content_4"],
        "unit_price_4" => $_POST["unit_price_4"],
        "quantity_4" => $_POST["quantity_4"],
        "rate_4" => $_POST["rate_4"],

        "content_5" => $_POST["content_5"],
        "unit_price_5" => $_POST["unit_price_5"],
        "quantity_5" => $_POST["quantity_5"],
        "rate_5" => $_POST["rate_5"],

        "content_6" => $_POST["content_6"],
        "unit_price_6" => $_POST["unit_price_6"],
        "quantity_6" => $_POST["quantity_6"],
        "rate_6" => $_POST["rate_6"],

        "content_7" => $_POST["content_7"],
        "unit_price_7" => $_POST["unit_price_7"],
        "quantity_7" => $_POST["quantity_7"],
        "rate_7" => $_POST["rate_7"],

        "content_8" => $_POST["content_8"],
        "unit_price_8" => $_POST["unit_price_8"],
        "quantity_8" => $_POST["quantity_8"],
        "rate_8" => $_POST["rate_8"],

        "content_9" => $_POST["content_9"],
        "unit_price_9" => $_POST["unit_price_9"],
        "quantity_9" => $_POST["quantity_9"],
        "rate_9" => $_POST["rate_9"],

        "content_10" => $_POST["content_10"],
        "unit_price_10" => $_POST["unit_price_10"],
        "quantity_10" => $_POST["quantity_10"],
        "rate_10" => $_POST["rate_10"],

        "content_11" => $_POST["content_11"],
        "unit_price_11" => $_POST["unit_price_11"],
        "quantity_11" => $_POST["quantity_11"],
        "rate_11" => $_POST["rate_11"],

        "content_12" => $_POST["content_12"],
        "unit_price_12" => $_POST["unit_price_12"],
        "quantity_12" => $_POST["quantity_12"],
        "rate_12" => $_POST["rate_12"],

        "content_13" => $_POST["content_13"],
        "unit_price_13" => $_POST["unit_price_13"],
        "quantity_13" => $_POST["quantity_13"],
        "rate_13" => $_POST["rate_13"],

        "content_14" => $_POST["content_14"],
        "unit_price_14" => $_POST["unit_price_14"],
        "quantity_14" => $_POST["quantity_14"],
        "rate_14" => $_POST["rate_14"],

        "content_15" => $_POST["content_15"],
        "unit_price_15" => $_POST["unit_price_15"],
        "quantity_15" => $_POST["quantity_15"],
        "rate_15" => $_POST["rate_15"],

        "content_16" => $_POST["content_16"],
        "unit_price_16" => $_POST["unit_price_16"],
        "quantity_16" => $_POST["quantity_16"],
        "rate_16" => $_POST["rate_16"],

        "content_17" => $_POST["content_17"],
        "unit_price_17" => $_POST["unit_price_17"],
        "quantity_17" => $_POST["quantity_17"],
        "rate_17" => $_POST["rate_17"],

        "content_18" => $_POST["content_18"],
        "unit_price_18" => $_POST["unit_price_18"],
        "quantity_18" => $_POST["quantity_18"],
        "rate_18" => $_POST["rate_18"],


    ];
    $user_id = Auth::id();
    $quotation_id = Quotation::insertGetId(['user_id' => $user_id, 'from' => $_POST['from'], 'for' => $_POST['for_for'], 'date' => $_POST['date'], 'deadline' => $_POST['deadline'], 'quote_no' => $data['number'], 'subject' => $data['subject'], 'remarks' => $data['remarks']]);
    for($i = 1;$i <= 18;$i++){
        if(!$data["content_$i"] == ""){
            Quotation_item::create(['quotation_id' => $quotation_id, 'user_id' => $user_id, 'content' => $data["content_{$i}"], 'unit_price' => $data["unit_price_{$i}"],  'quantity' => $data["quantity_{$i}"], 'rate' => $data["rate_{$i}"]]);
        }
    }

    /* カレントフォルダを取得 */
    $base_dir = dirname(__file__);

    
    /* フォントファイルがあるフォルダのパスを指定 */
    $font_dir = "$base_dir/resource/font";


    /* PDF オブジェクトを生成する */
    $p = new PDFlib();

    /* load_font() 等でエラーが起きた場合、所定の戻り値 (PHP の場合は 0、
    * 他の言語では -1) を戻すように設定する
    */
    $p->set_option("errorpolicy=return");

    /* PDF をメモリ上に作成する
    * 作成中にエラーが発生した場合、エラーメッセージを出力する
    */
    if ($p->begin_document("", "") == 0) {
        die("Error: " . $p->get_errmsg());
    }

    /* 文書情報を設定する
    * Creator: アプリケーション
    * Author: 作成者
    * Title: タイトル
    */
    // $p->set_info("Creator", "hello-j.php");
    // $p->set_info("Author", "インフォテック (株)");
    $p->set_info("Title", "$data[subject]請求書PDF");

    /* A4 サイズのページを作成する */
    $p->begin_page_ext(0, 0, "width=a4.width height=a4.height");

    /* カレントフォルダに置いたフォントファイルをロードする
    * ロードに失敗した場合は 0 が戻るので、エラーメッセージを表示する
    */
    $p->set_option("searchpath={$font_dir}");
    $p->set_option("FontOutline={MS-Mincho=msmincho.ttc}");
    $font = $p->load_font("MS-Mincho", "unicode", "");
    if ($font == 0) {
        die("Error: " . $p->get_errmsg());
    }

    /* テキストのフォントとフォントサイズを指定する */
    $fontoptS = "font={$font} fontsize=14";
    $fontoptM = "font={$font} fontsize=16";
    $fontoptL = "font={$font} fontsize=18";
    $fontoptXS = "font={$font} fontsize=12";
    $fontoptXL = "font={$font} fontsize=20";

// width 595
// height 845

    /* テキストを出力する */
    $p->fit_textline("見積書", 270, 800, $fontoptL);
    $p->fit_textline("見積書No$data[number]", 400, 760, $fontoptXS);
    $p->fit_textline("見積日$data[date]", 400, 745, $fontoptXS);
    $p->fit_textline("有効期限：$data[deadline]", 350, 630, $fontoptS);
    $p->fit_textline("合計金額 ￥$data[totalamount]", 38, 635, $fontoptM);

    if($data["subject"]){
        $p->fit_textline("件名：$data[subject]", 38, 670, $fontoptS);
    }
    //PDF_create_textflow()関数により出力するテキストを準備する
    $textfrom= $p->create_textflow($data["from"], $fontoptS);
    $textfor= $p->create_textflow($data["for"], $fontoptM);
    $textremarks= $p->create_textflow($data["remarks"], $fontoptXS);

    /* PDF_fit_textflow()関数により指定したフィットボックスに
    * テキストを出力する
    */
    $p->fit_textflow($textfor, 38, 450, 280, 770, "");
    $p->fit_textflow($textfrom, 400, 430, 650, 730, "");
    $p->fit_textflow($textremarks, 26, 30, 570, 157, "");

    // 線
    $p->setcolor("fillstroke", "rgb",0,0,0,0); //色を指定
    $p->setlinewidth(0.5);                                 //ストローク幅を指定
    $p->moveto(38, 632);  //始点座標
    $p->lineto(300, 632);  //直線を出す（終点座標)
    $p->stroke();             //出力する

    $p->fit_textline("品目", 170, 605, $fontoptS);
    $p->fit_textline("単価", 369, 605, $fontoptS);
    $p->fit_textline("数量", 423, 605, $fontoptS);
    $p->fit_textline("税率", 460, 605, $fontoptS);
    $p->fit_textline("金額", 515, 605, $fontoptS);

    $p->fit_textline("小計", 430, 225, $fontoptS);
    $p->fit_textline("消費税", 415, 208, $fontoptS);
    $p->fit_textline("合計金額", 400, 192, $fontoptS);
    $p->fit_textline("￥$data[subtotal]", 465, 225, $fontoptS);
    $p->fit_textline("￥$data[taxamount]", 465, 208, $fontoptS);
    $p->fit_textline("￥$data[totalamount]", 465, 191, $fontoptS);

    $p->fit_textline("備考", 30, 160, $fontoptXS);


    for($i=1;$i<=18;$i++){
        // テキスト
        $ht = 585;
        $p->fit_textline($data["content_{$i}"], 30,$ht - 20 * ($i - 1), $fontoptXS);
        if($data["unit_price_{$i}"]){
            $p->fit_textline(number_format($data["unit_price_{$i}"]), 350, $ht - 20 * ($i - 1), $fontoptXS);
        }
        $p->fit_textline($data["quantity_{$i}"], 432, $ht - 20 * ($i - 1), $fontoptXS);
        $p->fit_textline($data["rate_{$i}"], 467, $ht - 20 * ($i - 1), $fontoptXS);
        if($data["total_{$i}"]){
            $p->fit_textline(number_format($data["total_{$i}"]), 495, $ht - 20 * ($i - 1), $fontoptXS);
        }
    }

    for($i=1;$i<=18;$i++){
        // 横線
        $hs = 580;
        $p->moveto(25, $hs - 20 * ($i - 1));  //始点座標
        $p->lineto(570,$hs - 20 * ($i - 1));  //直線を出す（終点座標)
    }
    // １
    $p->moveto(25, 620);  //始点座標
    $p->lineto(25, 240);  //直線を出す（終点座標)
    // ２
    $p->moveto(348, 620);  //始点座標
    $p->lineto(348, 240);  //直線を出す（終点座標)
    // 3
    $p->moveto(420, 620);  //始点座標
    $p->lineto(420, 240);  //直線を出す（終点座標)
    // 4
    $p->moveto(455, 620);  //始点座標
    $p->lineto(455, 240);  //直線を出す（終点座標)
    // 5
    $p->moveto(490, 620);  //始点座標
    $p->lineto(490, 240);  //直線を出す（終点座標)

    // 6
    $p->moveto(570, 620);  //始点座標
    $p->lineto(570, 188);  //直線を出す（終点座標)


    // top
    $p->moveto(25, 620);  //始点座標
    $p->lineto(570, 620);  //直線を出す（終点座標)
    // 上２
    $p->moveto(25, 600);  //始点座標
    $p->lineto(570, 600);  //直線を出す（終点座標)
    // 合計
    // 縦１
    $p->moveto(463, 240);  //始点座標
    $p->lineto(463, 188);  //直線を出す（終点座標)
    // 横
    $p->moveto(463, 223);  //始点座標
    $p->lineto(570, 223);  //直線を出す（終点座標)
    // 上２
    $p->moveto(463, 205);  //始点座標
    $p->lineto(570, 205);  //直線を出す（終点座標)
    // 上3
    $p->moveto(463, 188);  //始点座標
    $p->lineto(570, 188);  //直線を出す（終点座標)
    // 備考
    $p->moveto(25, 158);  //始点座標
    $p->lineto(570, 158);  //直線を出す（終点座標)

    $p->moveto(25, 30);  //始点座標
    $p->lineto(570, 30);  //直線を出す（終点座標)

    $p->moveto(25, 158);  //始点座標
    $p->lineto(25, 30);  //直線を出す（終点座標)

    $p->moveto(570, 158);  //始点座標
    $p->lineto(570, 30);  //直線を出す（終点座標)


    $p->stroke();             //出力する

    /* ページを閉じる */
    $p->end_page_ext("");

    /* PDF を閉じる */
    $p->end_document("");

    /* 作成した PDF をメモリ上から取得し、ブラウザに返す */
    $buf = $p->get_buffer();
    $len = strlen($buf);
    header("Content-type: application/pdf");
    header("Content-Length: $len");
    header("Content-Diion: inline; filename=hello-j.pdf");

    print $buf;

    /* PDFlib オブジェクトを破棄する */
    $p = 0;

})->name('mitumorisho_pdf');

Route::post('/seikyusho_pdf', function(){
    $from_before = $_POST["from"];
    $search = array(" ","　"); 
    $from = str_replace($search,"\n",$from_before);
    $for_before = $_POST["for_for"];
    $search = array(" ","　"); 
    $for = str_replace($search,"\n",$for_before);

    $remarks_before = $_POST["remarks"];
    $search = array(" ","　"); 
    $remarks = str_replace($search,"\n",$remarks_before);
    $tt1 = $_POST["date"];
    $ts1 = strtotime($tt1);
    $date = date('Y年m月d日',$ts1);
    $tt2 = $_POST["deadline"];
    $ts2 = strtotime($tt2);
    $deadline = date('Y年m月d日',$ts2);


    if($_POST["totalamount"]){
        $ta = number_format($_POST["totalamount"]);
    }else{
        $ta = "";
    }
    if($_POST["subtotal"]){
        $st = number_format($_POST["subtotal"]);
    }else{
        $st = "";
    }
    if($_POST["taxamount"]){
        $taa = number_format($_POST["taxamount"]);
    }else{
        $taa = "";
    }

    $data = [            
        "from" => $from,
        "for" => $for,
        "date" => $date,
        "deadline" => $deadline,
        "number" => $_POST["number"],
        "subject" => $_POST["subject"],
        "remarks" => $remarks,

        "totalamount" => $ta,
        "subtotal" => $st,
        "taxamount" => $taa,
        "total_1" => $_POST["total1"],
        "total_2" => $_POST["total2"],
        "total_3" => $_POST["total3"],
        "total_4" => $_POST["total4"],
        "total_5" => $_POST["total5"],
        "total_6" => $_POST["total6"],
        "total_7" => $_POST["total7"],
        "total_8" => $_POST["total8"],
        "total_9" => $_POST["total9"],
        "total_10" => $_POST["total10"],
        "total_11" => $_POST["total11"],
        "total_12" => $_POST["total12"],
        "total_13" => $_POST["total13"],
        "total_14" => $_POST["total14"],
        "total_15" => $_POST["total15"],
        "total_16" => $_POST["total16"],
        "total_17" => $_POST["total17"],
        "total_18" => $_POST["total18"],

        "content_1" => $_POST["content_1"],
        "unit_price_1" => $_POST["unit_price_1"],
        "quantity_1" => $_POST["quantity_1"],
        "rate_1" => $_POST["rate_1"],

        "content_2" => $_POST["content_2"],
        "unit_price_2" => $_POST["unit_price_2"],
        "quantity_2" => $_POST["quantity_2"],
        "rate_2" => $_POST["rate_2"],

        "content_3" => $_POST["content_3"],
        "unit_price_3" => $_POST["unit_price_3"],
        "quantity_3" => $_POST["quantity_3"],
        "rate_3" => $_POST["rate_3"],

        "content_4" => $_POST["content_4"],
        "unit_price_4" => $_POST["unit_price_4"],
        "quantity_4" => $_POST["quantity_4"],
        "rate_4" => $_POST["rate_4"],

        "content_5" => $_POST["content_5"],
        "unit_price_5" => $_POST["unit_price_5"],
        "quantity_5" => $_POST["quantity_5"],
        "rate_5" => $_POST["rate_5"],

        "content_6" => $_POST["content_6"],
        "unit_price_6" => $_POST["unit_price_6"],
        "quantity_6" => $_POST["quantity_6"],
        "rate_6" => $_POST["rate_6"],

        "content_7" => $_POST["content_7"],
        "unit_price_7" => $_POST["unit_price_7"],
        "quantity_7" => $_POST["quantity_7"],
        "rate_7" => $_POST["rate_7"],

        "content_8" => $_POST["content_8"],
        "unit_price_8" => $_POST["unit_price_8"],
        "quantity_8" => $_POST["quantity_8"],
        "rate_8" => $_POST["rate_8"],

        "content_9" => $_POST["content_9"],
        "unit_price_9" => $_POST["unit_price_9"],
        "quantity_9" => $_POST["quantity_9"],
        "rate_9" => $_POST["rate_9"],

        "content_10" => $_POST["content_10"],
        "unit_price_10" => $_POST["unit_price_10"],
        "quantity_10" => $_POST["quantity_10"],
        "rate_10" => $_POST["rate_10"],

        "content_11" => $_POST["content_11"],
        "unit_price_11" => $_POST["unit_price_11"],
        "quantity_11" => $_POST["quantity_11"],
        "rate_11" => $_POST["rate_11"],

        "content_12" => $_POST["content_12"],
        "unit_price_12" => $_POST["unit_price_12"],
        "quantity_12" => $_POST["quantity_12"],
        "rate_12" => $_POST["rate_12"],

        "content_13" => $_POST["content_13"],
        "unit_price_13" => $_POST["unit_price_13"],
        "quantity_13" => $_POST["quantity_13"],
        "rate_13" => $_POST["rate_13"],

        "content_14" => $_POST["content_14"],
        "unit_price_14" => $_POST["unit_price_14"],
        "quantity_14" => $_POST["quantity_14"],
        "rate_14" => $_POST["rate_14"],

        "content_15" => $_POST["content_15"],
        "unit_price_15" => $_POST["unit_price_15"],
        "quantity_15" => $_POST["quantity_15"],
        "rate_15" => $_POST["rate_15"],

        "content_16" => $_POST["content_16"],
        "unit_price_16" => $_POST["unit_price_16"],
        "quantity_16" => $_POST["quantity_16"],
        "rate_16" => $_POST["rate_16"],

        "content_17" => $_POST["content_17"],
        "unit_price_17" => $_POST["unit_price_17"],
        "quantity_17" => $_POST["quantity_17"],
        "rate_17" => $_POST["rate_17"],

        "content_18" => $_POST["content_18"],
        "unit_price_18" => $_POST["unit_price_18"],
        "quantity_18" => $_POST["quantity_18"],
        "rate_18" => $_POST["rate_18"],
    ];

    $user_id = Auth::id();
    $invoice_id = Invoice::insertGetId(['user_id' => $user_id, 'from' => $_POST['from'], 'for' => $_POST['for_for'], 'date' => $_POST['date'], 'deadline' => $_POST['deadline'], 'invoice_no' => $data['number'], 'subject' => $data['subject'], 'remarks' => $data['remarks']]);
    for($i = 1;$i <= 18;$i++){
        if(!$data["content_$i"] == ""){
            Invoice_item::create(['invoice_id' => $invoice_id, 'user_id' => $user_id, 'content' => $data["content_{$i}"], 'unit_price' => $data["unit_price_{$i}"],  'quantity' => $data["quantity_{$i}"], 'rate' => $data["rate_{$i}"]]);
        }
    }

    /* カレントフォルダを取得 */
    $base_dir = dirname(__file__);

    
    /* フォントファイルがあるフォルダのパスを指定 */
    $font_dir = "$base_dir/resource/font";


    /* PDF オブジェクトを生成する */
    $p = new PDFlib();

    /* load_font() 等でエラーが起きた場合、所定の戻り値 (PHP の場合は 0、
    * 他の言語では -1) を戻すように設定する
    */
    $p->set_option("errorpolicy=return");

    /* PDF をメモリ上に作成する
    * 作成中にエラーが発生した場合、エラーメッセージを出力する
    */
    if ($p->begin_document("", "") == 0) {
        die("Error: " . $p->get_errmsg());
    }

    /* 文書情報を設定する
    * Creator: アプリケーション
    * Author: 作成者
    * Title: タイトル
    */
    // $p->set_info("Creator", "hello-j.php");
    // $p->set_info("Author", "インフォテック (株)");
    $p->set_info("Title", "$data[subject]請求書PDF");

    /* A4 サイズのページを作成する */
    $p->begin_page_ext(0, 0, "width=a4.width height=a4.height");

    /* カレントフォルダに置いたフォントファイルをロードする
    * ロードに失敗した場合は 0 が戻るので、エラーメッセージを表示する
    */
    $p->set_option("searchpath={$font_dir}");
    $p->set_option("FontOutline={MS-Mincho=msmincho.ttc}");
    $font = $p->load_font("MS-Mincho", "unicode", "");
    if ($font == 0) {
        die("Error: " . $p->get_errmsg());
    }

    /* テキストのフォントとフォントサイズを指定する */
    $fontoptS = "font={$font} fontsize=14";
    $fontoptM = "font={$font} fontsize=16";
    $fontoptL = "font={$font} fontsize=18";
    $fontoptXS = "font={$font} fontsize=12";
    $fontoptXL = "font={$font} fontsize=20";

// width 595
// height 845

    /* テキストを出力する */
    $p->fit_textline("請求書", 270, 800, $fontoptL);
    $p->fit_textline("請求書No$data[number]", 400, 760, $fontoptXS);
    $p->fit_textline("請求日$data[date]", 400, 745, $fontoptXS);
    $p->fit_textline("有効期限：$data[deadline]", 350, 630, $fontoptS);
    $p->fit_textline("合計金額 ￥$data[totalamount]", 38, 635, $fontoptM);

    if($data["subject"]){
        $p->fit_textline("件名：$data[subject]", 38, 670, $fontoptS);
    }
    //PDF_create_textflow()関数により出力するテキストを準備する
    $textfrom= $p->create_textflow($data["from"], $fontoptS);
    $textfor= $p->create_textflow($data["for"], $fontoptM);
    $textremarks= $p->create_textflow($data["remarks"], $fontoptXS);

    /* PDF_fit_textflow()関数により指定したフィットボックスに
    * テキストを出力する
    */
    $p->fit_textflow($textfor, 38, 450, 280, 770, "");
    $p->fit_textflow($textfrom, 400, 430, 650, 730, "");
    $p->fit_textflow($textremarks, 26, 30, 570, 157, "");

    // 線
    $p->setcolor("fillstroke", "rgb",0,0,0,0); //色を指定
    $p->setlinewidth(0.5);                                 //ストローク幅を指定
    $p->moveto(38, 632);  //始点座標
    $p->lineto(300, 632);  //直線を出す（終点座標)
    $p->stroke();             //出力する

    $p->fit_textline("品目", 170, 605, $fontoptS);
    $p->fit_textline("単価", 369, 605, $fontoptS);
    $p->fit_textline("数量", 423, 605, $fontoptS);
    $p->fit_textline("税率", 460, 605, $fontoptS);
    $p->fit_textline("金額", 515, 605, $fontoptS);

    $p->fit_textline("小計", 430, 225, $fontoptS);
    $p->fit_textline("消費税", 415, 208, $fontoptS);
    $p->fit_textline("合計金額", 400, 192, $fontoptS);
    $p->fit_textline("￥$data[subtotal]", 465, 225, $fontoptS);
    $p->fit_textline("￥$data[taxamount]", 465, 208, $fontoptS);
    $p->fit_textline("￥$data[totalamount]", 465, 191, $fontoptS);

    $p->fit_textline("備考", 30, 160, $fontoptXS);


    for($i=1;$i<=18;$i++){
        // テキスト
        $ht = 585;
        $p->fit_textline($data["content_{$i}"], 30,$ht - 20 * ($i - 1), $fontoptXS);
        if($data["unit_price_{$i}"]){
            $p->fit_textline(number_format($data["unit_price_{$i}"]), 350, $ht - 20 * ($i - 1), $fontoptXS);
        }
        $p->fit_textline($data["quantity_{$i}"], 432, $ht - 20 * ($i - 1), $fontoptXS);
        $p->fit_textline($data["rate_{$i}"], 467, $ht - 20 * ($i - 1), $fontoptXS);
        if($data["total_{$i}"]){
            $p->fit_textline(number_format($data["total_{$i}"]), 495, $ht - 20 * ($i - 1), $fontoptXS);
        }
    }

    for($i=1;$i<=18;$i++){
        // 横線
        $hs = 580;
        $p->moveto(25, $hs - 20 * ($i - 1));  //始点座標
        $p->lineto(570,$hs - 20 * ($i - 1));  //直線を出す（終点座標)
    }
    // １
    $p->moveto(25, 620);  //始点座標
    $p->lineto(25, 240);  //直線を出す（終点座標)
    // ２
    $p->moveto(348, 620);  //始点座標
    $p->lineto(348, 240);  //直線を出す（終点座標)
    // 3
    $p->moveto(420, 620);  //始点座標
    $p->lineto(420, 240);  //直線を出す（終点座標)
    // 4
    $p->moveto(455, 620);  //始点座標
    $p->lineto(455, 240);  //直線を出す（終点座標)
    // 5
    $p->moveto(490, 620);  //始点座標
    $p->lineto(490, 240);  //直線を出す（終点座標)

    // 6
    $p->moveto(570, 620);  //始点座標
    $p->lineto(570, 188);  //直線を出す（終点座標)


    // top
    $p->moveto(25, 620);  //始点座標
    $p->lineto(570, 620);  //直線を出す（終点座標)
    // 上２
    $p->moveto(25, 600);  //始点座標
    $p->lineto(570, 600);  //直線を出す（終点座標)
    // 合計
    // 縦１
    $p->moveto(463, 240);  //始点座標
    $p->lineto(463, 188);  //直線を出す（終点座標)
    // 横
    $p->moveto(463, 223);  //始点座標
    $p->lineto(570, 223);  //直線を出す（終点座標)
    // 上２
    $p->moveto(463, 205);  //始点座標
    $p->lineto(570, 205);  //直線を出す（終点座標)
    // 上3
    $p->moveto(463, 188);  //始点座標
    $p->lineto(570, 188);  //直線を出す（終点座標)
    // 備考
    $p->moveto(25, 158);  //始点座標
    $p->lineto(570, 158);  //直線を出す（終点座標)

    $p->moveto(25, 30);  //始点座標
    $p->lineto(570, 30);  //直線を出す（終点座標)

    $p->moveto(25, 158);  //始点座標
    $p->lineto(25, 30);  //直線を出す（終点座標)

    $p->moveto(570, 158);  //始点座標
    $p->lineto(570, 30);  //直線を出す（終点座標)


    $p->stroke();             //出力する

    /* ページを閉じる */
    $p->end_page_ext("");

    /* PDF を閉じる */
    $p->end_document("");

    /* 作成した PDF をメモリ上から取得し、ブラウザに返す */
    $buf = $p->get_buffer();
    $len = strlen($buf);
    header("Content-type: application/pdf");
    header("Content-Length: $len");
    header("Content-Diion: inline; filename=hello-j.pdf");

    print $buf;

    /* PDFlib オブジェクトを破棄する */
    $p = 0;
})->name('seikyusho_pdf');

