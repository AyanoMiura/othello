//オセロ
//1は黒、-1は白
var turn=1;
var board_data=[];

window.onload=function(){
  var board=document.getElementById("board");

  for(var x=0;x<8;x++){
    for(var y=0;y<8;y++){
      var select_cell=board.rows[x].cells[y];
      select_cell.onclick=function(){
        //クリックした時の動作
        ban_set(select_cell);
        chenge_turn();
        console.log(select_cell);
     }
    }
  }
};//onloadの終わり


function ban_set(cell){
  for (var x= 0;x < 8; x++) {
       board_data[x] = [];
       for (var y = 0; y < 8; y++) {
           board_data[x][y] =0;
       }
   }
   board_data[3][3]=-1;
   board_data[3][4]=1;
   board_data[4][4]=-1;
   board_data[4][3]=1;
   //全てのセルにidを振る
 for(var x = 0; x< board.rows.length;x++){
  for(var y = 0; y < board.rows[x].cells.length;y++){
   board.rows[x].cells[y].id = "p" + x + y;
   }
 }
  //idごとに値を設定
  var piece_img=document.createElement('img');
  for (var x= 0;x < 8; x++) {
    for (var y = 0; y < 8; y++) {
     if (turn==1) {
       if( board_data[x][y]==1){
  　    piece_img.src="game_reversi_black.png";
       }
  　}else if (turn==-1) {
       if( board_data[x][y]==-1){
    　  piece_img.src="game_reversi_white.png";
       }
     }　
    cell.appendChild(piece_img);
    }
   }
 }

//turnの交代
function chenge_turn(){
  turn=turn*-1;
}
