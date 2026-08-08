const data=[1, 2, 3, 2, 4, 1];
const freq={};
for (let i=0;i<data.length;i++)
{
    if(freq[data[i]])
    {
        freq[data[i]]++;
    }
    else{
        freq[data[i]]=1;
    }
    //before printing duplicates the occurrence of each element will be calculated
    //print duplicates
    if(freq[data[i]]===2)
    {
        console.log(data[i]);
    }

}