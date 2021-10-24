const form = document.getElementById('a-form')
const formParts = form.querySelectorAll('.part-container')
const stepControl = document.getElementById('step-control')
const steps = stepControl.querySelectorAll('.step')
const btnControl = document.getElementById('btn-control')
const nextBtn = btnControl.querySelector('.btn-primary')
const prevBtn = btnControl.querySelector('.btn-outline')

const cardList =document.querySelector('#cart-list')


let step = 0

function displayAccount(num){
  let htmlContent = ""
  
}

function handleBtnControlClicked(event){
  event.preventDefault();
  const nowStep = steps[step]
  if (event.target.matches(".btn-primary") && event.target.innerHTML === "下一步")
  {
    const nextStep = steps[step + 1]
    nowStep.classList.add('checked')
        // nextStep.classList.add('active')

    nextStep.classList.add('check')
    formParts[step].classList.toggle('d-none')
    formParts[step + 1 ].classList.toggle('d-none')
    step +=1
  }else if (event.target.matches('.btn-outline')){
    const prevStep = steps[step - 1]
    nowStep.classList.remove('check')
    prevStep.classList.remove('active')
    formParts[step].classList.toggle('d-none')
    formParts[step - 1 ].classList.toggle('d-none')
    step -=1
  }
  setBtnDisabled()
}

function setBtnDisabled() {
  if (step === 0) {
      prevBtn.classList.remove("d-none");
  } else {
    prevBtn.removeAttribute('disabled')
  }

 

  if (step === 2) {
    nextBtn.innerHTML = '確認下單'
  } else {
    nextBtn.innerHTML = '下一步'
  }
}



btnControl.addEventListener('click', handleBtnControlClicked)
