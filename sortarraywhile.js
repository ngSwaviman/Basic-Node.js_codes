function sort(array,n)
{
    var i=0
    while(i<n)
    {
        var correct = array[i]-1
        if(array[i] != array[correct])
        {
            swap(array, i, correct)
        }
        else
        {
            i++
        }
    }
}

function swap(array, i, correct)
{
    var temp = array[i]
    array[i]=array[correct]
    array[correct]=temp
}

var array = [2,6,1,,4,7,9]
var n=7

sort (array, n)
for(var i=0;i<n;i++)
{
    console.log(array[i])
}