//オセロ
var empty=0;
var black=1;
var white=2;
var cells=[];

//盤のidを取得
var board=document.getElementById('board');
window.onload = function(){


//初期化
ban_init();

};
//tdにlavelを生成
  function addelement(){
    var td=board.getElementsByTagName('td');
    var label=document.createElement('label');
    td.appendChild(label);
  };

//盤の初期化
function ban_init(){
  for(var x=0;x<8;x++){
    for (var y = 0; y <8; y++){
      cells[x][y];
    }
  }
  //初期配置
  ban[3][3]=2;
  ban[3][4]=1;
  ban[4][3]=1;
  ban[4][4]=2;
  ban_set();
};



// 石を置く
function ban_set(){
  var stone;
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
    board.row[x].cells[y].innertext=stone;
    }
  }
};
