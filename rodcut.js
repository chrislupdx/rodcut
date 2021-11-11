//this is is an JS implementation of top-down rodcutting
//find the maximum total sale price that can be obtained by cutting a rod of n units
//long into integer-length pieces if the sale price of a piece i units long is 
//p of i for i = 1 ,2, ....n. 
//What are the time and spece efficiencies of your algo?
//what is p

//not sure this is memoized
function btmUprodCut(p, n)
{
    let r = Array(n);
    for(let i = 0; i < n; i++)
    {
        r[i] = -null; //js might have a preferred null
    }
    r[0] = 0;
    
    for(let j = 0; j < n; j++)
    {
        q = -null;
        for(let i = 0; i < j; i++)
        {
            q = Math.max(q, p[i] + r[j - i]);
        }
        r[j] = q
    }
    return r[n]
}

//optimal rodcut

function printVals(p, n)
{
    //produce arrays r and s, which hold the values
}

let p = [1, 2, 3, 4, 5, 2, 1];
let n = 4;

let answer = btmUprodCut(p, n);
console.log("answer is ", answer); //currently unedefined
