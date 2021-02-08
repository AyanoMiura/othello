//オセロ
var empty=0;
var black=1;
var white=2;
var cells=[];
var stone;
//盤のidを取得
var board=document.getElementById('board');
//盤に表示
window.onload = function(){
  //tdにlavelを生成
  //lavelでマスと盤を関連づける
    function addelement(){
      var td=document.querySelectorAll('td');
      var label=document.createElement('label');
      //取得したtdのすべてにlavelを追加
      for(var x=0;x<td.length;++x){
         td.appendChild(label);
      }
    }

  //盤の初期化
  ban_init();
  //クリックイベント
  for(var x=0;x<8;x++){
    for (var y = 0; y <8; y++){
      var selec_cell=board.rows[x].cells[y];
      select_cell.onclick=function(){
      ban_set();
      }
    }
  }

};



//盤の初期化
function ban_init(){
  //盤のマスを縦軸と横軸でループ
    for(var x=0;x<8;x++){
      cells[x]=[];
      for (var y = 0; y <8; y++){
        cells[x][y]=empty;
      }
    }
    //初期配置
    cells[3][3]=2;
    cells[3][4]=1;
    cells[4][3]=1;
    cells[4][4]=2;
    ban_set();
}



// 石を置く
function ban_set(){
  for(var x=0;x<8;x++){
    for (var y = 0; y <8; y++){
    switch (cells[x][y]) {
      case 0:
        stone="";
        break;
      case 1:
        stone="●"
        break;
      case 2:
        stone="○"
        break;
    }
    //盤の中で行とセルを取得
    cells[x][y].innertext=stone;
    }
  }
}
