//オセロ
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
    board[x]=[];
    for(var y=0;y<8;y++){
      board[x][y]=empty;
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
        //石が置いてないか確認
         if(this.classList.contains('black')==false&&this.classList.contains('white')==false){
           put_stone(this);
         }else {
           alert('そこには置けません')
         }
       }
     }
  }

  //石を置く処理 numが裏替すコマ
  function setcell(x,y,num){
    for(var x=0;x<8;x++){
      for(var y=0;y<8;y++){
         cell[x][y]=num;
      }
    }
  };
  //指定した方向に裏返せるか検索
  function search_reverse(x,y,add_x,add_y){
    var xx=x;
    var yy=y;
    //裏返した数
    var koma=0;
    //自分の石か空のセル以外をtrue,相手の石の時のみfalse
    var hit=false;
    while (!hit) {
      xx+=add_x;
      yy+=add_y;
      //進むごとにkomaを足していき、足した分返す
      koma++;
      //盤外になったらループを抜ける
      if(xx<0 || xx>8 || yy<0 || yy>8){
        break;
      }
      //移動先のセルに石がないなら抜ける
      if (cell[xx][yy]==empty) {
        break;
      }
      //移動先に自分の石があったらmtselfを1にして抜ける。
      if(cell[xx][yy]==turn){
        hit=true;
        //komaをループしてる時に裏返す
        for(var i=0;i<koma;i++){
          setcell(xx,yy,koma);
        }
      }
    }
  };

//石を置く
  function put_stone(a){
    for(var x=0;x<8;x++){
      cell[x]=[];
      for(var y=0;y<8;y++){
        cell[x][y];
      }
    }
    if(turn==1){
      a.classList.add('black');
      search_reverse(x,y,1,0);//右に調べる
      turn=turn*-1;
    }else{
      a.classList.add('white');
      turn=turn*-1;
    }
  };
};
