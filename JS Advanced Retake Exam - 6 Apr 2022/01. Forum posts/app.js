window.addEventListener("load", solve);

function solve() {
  const titleInput = document.getElementById('post-title');
  const categoryInput = document.getElementById('post-category');
  const contentInput = document.getElementById('post-content');
  const publishBtn = document.getElementById('publish-btn');
  const reviewList = document.getElementById('review-list');
  const publishedList = document.getElementById('published-list');

  publishBtn.addEventListener('click', (e) => {
      e.preventDefault();

      if (titleInput.value && categoryInput.value && contentInput.value){
          const title = titleInput.value;
          const category = categoryInput.value;
          const content = contentInput.value;

          console.log('Clicked and all is ok!')
          const li = createElement('li','','rpost');
          const article = createElement('article');
          article.appendChild(createElement('h4',title));
          article.appendChild(createElement('p',`Category: ${category}`));
          article.appendChild(createElement('p',`Content: ${content}`));
          li.appendChild(article);

          const editBtn = createElement('button','Edit','action-btn edit');
          editBtn.addEventListener('click',()=>{
              li.remove();
              titleInput.value = title;
              categoryInput.value = category;
              contentInput.value = content;
          })

          li.appendChild(editBtn);

          const approveBtn = createElement('button','Approve','action-btn approve');
          approveBtn.addEventListener('click',()=>{
              editBtn.remove();
              approveBtn.remove();
              publishedList.appendChild(li);
          })

          li.appendChild(approveBtn);

          reviewList.appendChild(li);
          titleInput.value = '';
          categoryInput.value = '';
          contentInput.value = '';

      }


  })

    const clearBtn = document.getElementById('clear-btn');
  clearBtn.addEventListener('click', ()=> {
      publishedList.innerHTML = '';
  })

    function createElement(tag,content,className){
      const el = document.createElement(tag);

      if (content){
          el.textContent = content;
      }

      if (className){
          el.className = (className);
      }
      return el;
    }
}
