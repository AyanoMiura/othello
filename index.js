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
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, -1, 1, 0, 0, 0],
  [0, 0, 0, 1, -1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];
var coordinate=[[1,0],[0,1],[1,1],[1,-1],[0,-1],[-1,0],[-1,-1],[-1,1]];


window.onload=function(){
  ban_init();
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

//盤の初期化
function ban_init(){
  for (var x= 0;x <= 7; x++) {
       board_data[x] = [];
       for (var y = 0; y <= 7; y++) {
           board_data[x][y] =0;
       }
   }
   //全てのセルにidを振る
for(var x = 0; x< board.rows.length;x++){
 for(var y = 0; y < board.rows[x].cells.length;y++){
  board.rows[x].cells[y].id = "p" + x + y;
  }
}
   board_data[3][3]=-1;
   board_data[3][4]=1;
   board_data[4][4]=-1;
   board_data[4][3]=1;
}



//駒を置く
function ban_set(cell){
  var piece_img=document.createElement('img');
  for (var x= 0;x < 8; x++) {
    for (var y = 0; y < 8; y++) {
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
  var cell=document.getElementById("p" + x + y);
  var img =cell.lastElementChild;
  img.src=imgPath[turn];
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

    while (true) { //相手の駒がある間はループする
      if (xx < 0 || xx > 7 || yy < 0 || yy > 7) { //盤外
        break;
      }
      if(board_data[xx][yy]==0){ //移動先に石がないなら抜ける
        break;
      }
      if(board_data[xx][yy]==opponent) { //相手の駒がある
        xx+=cx;
        yy+=cy;
        koma_cnt++;
      }
      if(koma_cnt==0){
       if(board_data[xx][yy]==turn) { //移動先の1つ目が自分の石なら、何もせず抜ける
         hit=true;
         break;
       }
      }
      if (koma_cnt>0) {
        if (board_data[xx][yy]==turn) {　//移動先の1つ目以上が自分の石なら、裏返す
          hit=true;
          var px=xx;
          var py=yy;
          for (var a = 0; a < koma_cnt; a++) { //駒を数えた分ループする
            px-=cx;
            py-=cy;
            stone_reverse(px,py,turn);
          }
        }
      }
    }
  }
}
