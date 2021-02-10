//オセロ
//空のマスの変数
var empty=0;
//黒の石の変数
var black=1;
//白の石の変数
var white=2;
//マスの位置を把握する変数
var cells=[];
//白黒の石を判断する変数
var stone;
//盤を取得する変数
var board;

//盤に表示
window.onload = function(){
  //盤のidを取得
  board=document.getElementById('board');

  //盤の初期化
  ban_init();

  //8行をループ
  for(var x=0;x<8;x++){
    //1行の中の8マスをループ
    for (var y = 0; y <8; y++){
      //取得した盤のマスを変数に格納
      var select_cell=board.rows[x].cells[y];
      //取得したマスをクリックした時の動き
      select_cell.onclick=function(){
      //石を置く
      ban_set();
      }
    }
  }

};

//tdにlavelを生成する関数
//lavelでマスと盤を関連づける
  function addelement(){
    //すべてのtdを取得し変数に格納
    var td=document.querySelectorAll('td');
    //labelを生成
    var label=document.createElement('label');
    //取得したtdのすべてにlavelを追加
    for(var x=0;x<td.length;++x){
       td.appendChild(label);
    }
  }

//盤の初期化する関数
function ban_init(){
  //8行をループ
  for(var x=0;x<8;x++){
  //何行目かを取得
    cells[x]=[];
    //x行の中で8マスをループ
    for (var y = 0; y <8; y++){
        //x行目のｙマスを取得し空のマスを代入
        cells[x][y]=0;
      }
    }
    //初期配置
    cells[3][3]=2;
    cells[3][4]=1;
    cells[4][3]=1;
    cells[4][4]=2;
    //石を置く
    ban_set();
}



// 石を置く関数
function ban_set(){
  //8行をループ
  for(var x=0;x<8;x++){
    //x行目の中で8マスループ
    for (var y = 0; y <8; y++){
    //x行目のyマスが白黒のどちらか判断
    switch (cells[x][y]) {
      //0の場合、空
      case 0:
        stone="";
        break;
      //1の場合、黒
      case 1:
        stone="●"
        break;
      //2の場合、白
      case 2:
        stone="○";
        break;
    }
    //盤のマスに取得し合致した石を表示
    board.rows[x].cells[y].textcontent=stone;
    }
  }
}
