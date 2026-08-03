const data= [5,5,3,3]
// const tokens = data.split(/\s+/).filter(s => s.length > 0).map(Number);
// const n = tokens[0];
// const arr = tokens.slice(1, 1 + n);
const freq={};
for(let i=0;i<data.length;i++)
{
    if(freq[data[i]])
    {
        freq[data[i]]++
    }
    else
    {
        freq[data[i]]=1;
    }
}
for(let key in freq)
{
    console.log(`${key} appears ${freq[key]} times`);
}