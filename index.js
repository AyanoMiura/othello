//オセロ
//空のセル
var empty=0;
//マスの位置を把握する変数
var cell=[];
//1なら黒、-1なら白
var turn=1;
//盤に表示
window.onload = function(){
  //盤のidを取得
var board=document.getElementById('board');
  //初期化,すべてのセルに0を入れる
  for(var x=0;x<8;x++){
    cell[x]=[];
    for(var y=0;y<8;y++){
      cell[x][y]=empty;
    }
  }
  //tableの全てにクリックイベントを付与
  //盤の行をループ
  for (var x=0;x<board.rows.length;x++){
    //x行のマスをループ
    for(var y=0;y<board.rows[x].cells.length;y++){
       //取得したセルを変数に格納
       var squares=board.rows[x].cells[y];

       //クリックイベント
       squares.onclick=function(){
         reverse(this.parentNode.rowIndex,this.cellIndex);
        //石が置いてないか確認
         put_stone(this);

       }
     }
  }

  //石を置く処理
    function put_stone(a){
      if(a.classList.contains('black')==false && a.classList.contains('white')==false){
      if(turn==1){
        a.classList.add('black');
        turn=turn*-1;
      }else{
        a.classList.add('white');
        turn=turn*-1;
      }
    }else {
     alert('そこには置けません');
    }
    };

function check_reverse(row,col){
  reverse(row,col,0,1); //右
  reverse(row,col,0,-1); //左
  reverse(row,col,-1,0); //上
  reverse(row,col,1,0); //下
  reverse(row,col,1,1); //右下
  reverse(row,col,1,-1); //左下
  reverse(row,col,-1,1); //右上
  reverse(row,col,-1,-1); //左上
};

  //指定した方向に裏返す
  function reverse(x,y,add_x,add_y){
    for(var x=0;x<8;x++){
      for(var y=0;y<8;y++){
        cell[x][y]=board.rows[x].cells[y];
      }
    }
    //クリックした位置
    var xx=x;
    var yy=y;
    var hit=true;
    //相手の石をカウント
    var koma=0;
    while (hit) {
      xx+=add_x;
      yy+=add_y;
      //進むごとにkomaを足していき、足した分返す
      koma++;
      //盤外になったらループを抜ける
      if(xx<0 || xx>7|| yy<0 || yy>7){
        break;
      }
      //移動先のセルに石がないなら抜ける
      if (cell[x][y]==empty) {
        break;
      }
      //移動した先に自分の駒があった場合
      if(turn==1){
        if(cell[xx][yy].classList.contains('black')==true){
          //移動出来た分を自色にする
          for(var i=0;i<koma;i++){
              koma.classList.add('black');
            }
        }
        break;
      }else {
        if(cell[xx][yy].classList.contains('white')==true){
          //移動出来た分を自色にする
          for(var i=0;i<koma;i++){
              koma.classList.add('white');
            }
        }
        break;
      }
    }
  };


};
