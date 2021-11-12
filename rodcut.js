//this is is an JS implementation of bottom-up-down rodcutting
//find the maximum total sale price that can be obtained by cutting a rod of n units
//long into integer-length pieces if the sale price of a piece i units long is 
//p of i for i = 1 ,2, ....n. 
//What are the time and spece efficiencies of your algo?
//import performance

//memoized
function btmUprodCut(p, n)
{
    let r = Array(n);
    for(let i = 0; i <= n; i++) //is this the right size
    {
        r[i] = null; //js might have a preferred null
    }
    r[0] = 0;
    for(let j = 1; j <= n; j++)
    {
        q = null;
        for(let i = 1; i <= j; i++)
        {
            q = Math.max(q, p[i] + r[j - i]);
        }
        r[j] = q
    }
    console.log("pringint our array :");
    let i = 0;
    while(i <= n) //n val is undefined
    {
        console.log(r[i], " ");
        i += 1;
    }
    console.log("done printing array");
    return r[n]
}

function test()
{
    let n = 10;
    let p = [0, 1, 5, 8, 9, 10, 17, 17, 20, 24, 30];
    //for(let i = 0; i < p.length; i++)
    //{
    //    console.log(i, "th price is ", p[i]);
    //}
    let startTime = performance.now();
    let btmupanswer = btmUprodCut(p, n);
    let endTime = performance.now();
    let delta =  endTime - startTime;
    console.log("n is ", n, "answer is ", btmupanswer, "elapsed time is ", delta, " millisecconds");
    let answer = (p, n);
    //for(let i = 0; i < 10; i++)
    //{
    //    let answer = btmUprodCut(p, n);
    //    console.log("n is currently ", n, " answer is ", answer);
    //    n += 1;
    //}
}
test();
