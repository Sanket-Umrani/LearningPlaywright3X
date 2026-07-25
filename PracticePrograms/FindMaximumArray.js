const arr = [4, 10, 5, 8, 3];

let max = arr[0];
for (let i = 1; i < arr.length; i++)
{
    if (arr[i] > max)
    {
        max = arr[i];
    }

}
console.log(max);