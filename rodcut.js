//this is is an JS implementation of top-down rodcutting
//find the maximum total sale price that can be obtained by cutting a rod of n units
//long into integer-length pieces if the sale price of a piece i units long is 
//p of i for i = 1 ,2, ....n. 
//What are the time and spece efficiencies of your algo?
//what is p

//function extBotUpRodCut(p, n)
//{
//    let r = Array(n);
//    let s = Array(n); 
//    
//    //set them empty
//    for(let i = 0; i < r.length; i++)
//    {
//        r[i] = -null;
//        s[i] = -null;
//    }
//    
//    r[0] = 0;
//    for (let j = 0; j < n; j++)
//    {
//        let q = -null; //should this be infinity
//        for(let i = 0; i < j; i++) 
//        {
//            if(q < (p[i] + r[j - i]))
//            {
//                q = p[i] + r[j- i];
//                s[j] = i;
//            }
//            r[j] = q;
//        }
//    }
//    return [r, s];
//}

function rodCut(p, n)
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

function printVals(p, n)
{
    //produce arrays r and s, which hold the values
}
//write the outer/inner function
//rcb([1, 2, 3], 1000);
