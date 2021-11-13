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
    return r[n]
}
function test()
{
    let n = 45; //we are testing 5, 20, 45
    //let p = [0, 1, 5, 8, 9, 10, 17, 17, 20, 24, 30];
    let p = [1, 5, 6, 7 , 8, 9, 7 , 8, 9, 10, 17, 10, 17, 17, 20, 23, 24, 25, 26, 27, 28, 29,7 , 8, 9, 10, 17, 30, 32, 34, 35, 36, 38, 40, 42, 44 ,46, 50, 52, 56];
    //let p = [1, 5, 8, 9];
    //[0, 1, 5, 8, 9 10]
    //[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

    //for(let i = 0; i < p.length; i++)
    //{
    //    console.log(i, "th price is ", p[i]);
    //}
    //for(let i = 0; i < 10; i++)
    //{
      let startTime = performance.now();
      let btmupanswer = btmUprodCut(p, n);
      let endTime = performance.now();
      let delta =  endTime - startTime;
      console.log("n is ", n, "answer is ", btmupanswer, "elapsed time is ", delta, " millisecconds");
      //let answer = (p, n);
      //n += 1;
    //}
    //for(let i = 0; i < 10; i++)
    //{
    //    let answer = btmUprodCut(p, n);
    //    console.log("n is currently ", n, " answer is ", answer);
    //    n += 1;
    //}
}

test();
