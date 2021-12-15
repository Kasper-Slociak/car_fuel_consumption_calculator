if(document.readyState=="loading")
{
    document.addEventListener('DOMContentLoaded', ready);
} else
{
    ready()
}
function ready()
{
    
count();
}

function count()
{
    
    let distance=document.querySelector('.km');
    let avg=document.querySelector('.avg');
    let price=document.querySelector('.price');
    distance.addEventListener('input', () => {
        
            

        avg.addEventListener('input', () => {

            
            
            


        

        price.addEventListener('input', () => {


            let btn=document.querySelector('.btn');
                btn.addEventListener("click", () => 
                
                 { 
            let distanceValue=distance.value;           
            let avgValue=avg.value;
            let priceValue=price.value;
            let formula=(distanceValue * avgValue) / 100;
            let sum = formula * priceValue;
            sum=sum.toFixed(2);
            let p = document.querySelector('.addItem');
            p.style.opacity= 1;
            p.innerText="The trip will cost you "+sum;
                })
             })

        })
        
        
    })
    

    
    
}
function refresh()
{
    document.location.reload(false);
}