//オセロ
const BLACK_TURN = 1; // 定数：黒のターン
const WHITE_TURN = -1; // 定数：白のターン
// 画像ファイルのパスを格納
var imgPath = [];
imgPath[BLACK_TURN] = "game_reversi_black.png"; // 黒
imgPath[WHITE_TURN] = "game_reversi_white.png"; // 白
// 現在のターンを示す変数
var turn=BLACK_TURN;
var board_data=[
  [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  [9, 0, 0, 0, 0, 0, 0, 0, 0, 9],
  [9, 0, 0, 0, 0, 0, 0, 0, 0, 9],
  [9, 0, 0, 0, 0, 0, 0, 0, 0, 9],
  [9, 0, 0, 0, -1, 1, 0, 0, 0, 9],
  [9, 0, 0, 0, 1, -1, 0, 0, 0, 9],
  [9, 0, 0, 0, 0, 0, 0, 0, 0, 9],
  [9, 0, 0, 0, 0, 0, 0, 0, 0, 9],
  [9, 0, 0, 0, 0, 0, 0, 0, 0, 9],
  [9, 9, 9, 9, 9, 9, 9, 9, 9, 9]
];
var coordinate=[[1,0],[0,1],[1,1],[1,-1],[0,-1],[-1,0],[-1,-1],[-1,1]];


window.onload=function(){
  var board=document.getElementById("board");
  for(var x=0;x<8;x++){
    for(var y=0;y<8;y++){
      var select_cell=board.rows[x].cells[y];
      select_cell.onclick=function(){
        //クリックした時の動作
         check_reverse(this.parentNode.rowIndex,this.cellIndex,turn);
         ban_set(this);
         chenge_turn();
     }
    }
  }
};//onloadの終わり

function ban_set(cell){
  var piece_img=document.createElement('img');
  for (var x= 1;x < 9; x++) {
       board_data[x] = [];
       for (var y = 1; y < 9; y++) {
           board_data[x][y] =0;
       }
   }
   board_data[4][4]=-1;
   board_data[4][5]=1;
   board_data[5][5]=-1;
   board_data[5][4]=1;


  for (var x= 1;x < 9; x++) {
    for (var y = 1; y < 9; y++) {
        if( board_data[x][y]==1){
  　     piece_img.src=imgPath[turn];
        }else if( board_data[x][y]==-1){
    　   piece_img.src=imgPath[turn];
        }
    cell.appendChild(piece_img);
    }
   }
 }

//turnの交代
function chenge_turn(){
  turn=turn*-1;
}
//相手の駒の色を取得
function get_opponent(turn){
  return turn*-1;
}

function stone_reverse(x,y,turn){
 var img=document.getElementsByTagName('img');
 if (turn==1) {
   img.src=imgPath[turn];
 }else if (turn==-1) {
   img.src=imgPath[turn];
 }
}


//駒が置けるかチェック、置けたときの処理
function check_reverse(x,y,turn){
  var opponent=get_opponent(turn);
  var koma_cnt=0;
  var hit=false;

  for (var i = 0; i < 8 ; i++) {
    var cx=coordinate[i][0];
    var cy=coordinate[i][1];
    var xx=x+cx;
    var yy=y+cy;

    if (board_data[xx][yy]!=opponent ){  //相手の駒がなければ以降の処理をしない
      continue;
    }

    while (board_data[xx][yy]==opponent) { //相手の駒がある間はループする
      xx+=cx;
      yy+=cy;
      koma_cnt++;
      if(board_data[xx][yy]==0){ //移動先に石がないなら抜ける
        hit = false;
        break;
      }else if(xx==9 || yy==9) { //盤外なら抜ける
        hit = false;
        break;
      }else if (board_data[xx][yy]==turn) { //移動先に自分の石がある時、裏返す
        hit=true;
        break;
      }
     }
   }
   if (hit==true) {
     var px=xx-cx;
     var py=yy-cy;
     for (var a = 0; a < koma_cnt.length; a++) { //駒を数えた分ループする
       board_data[px][py]=turn;
       stone_reverse(px,py,turn);
       px-=cx;
       py-=cy;
       return true;
   }
 }
}
