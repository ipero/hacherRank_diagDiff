// This function finds the absolute difference between the sums of diagonals of square matrix.
function calculate() {
    // n is matrix size, get n from input
    var n = parseInt(readLine());
    // a is matrix, get matrix from input
    var a = [];
    for(a_i = 0; a_i < n; a_i++){
       a[a_i] = readLine().split(' ');
       a[a_i] = a[a_i].map(Number);
    }
    var firstDgnl = 0;
    var secondDgnl = 0;
    for(var i=0; i<n; i++){
        firstDgnl += a[i][i];
    }
    for(i=0,k=n;i<n; i++,k--){
        secondDgnl += a[i][k-1];
    }

    console.log(Math.abs(firstDgnl-secondDgnl));
}
