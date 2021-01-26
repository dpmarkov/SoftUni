function solve() {
   let sendBtn = document.querySelector('#send');
   let messagesElm = document.querySelector('#chat_messages');

   sendBtn.addEventListener('click', onClickBtn);

   function onClickBtn() {
      let inputElm = document.querySelector('#chat_input');
      let newMsgTxt = inputElm.value;

      if (newMsgTxt != ""){
         let newMsgElm = document.createElement('div');
         
         newMsgElm.classList.add('message', 'my-message');
         newMsgElm.innerHTML = newMsgTxt;
         messagesElm.appendChild(newMsgElm);

         inputElm.value = "";
      }
   }
}