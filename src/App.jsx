import React, { useState } from 'react';
import "./App.css"

const App = () => {


  const [posts, setPosts] = useState([
    {
      id: Date.now(),
      owner: 'gustavolara',
      content: 'Tarefa 1',
    }
  ]);
  //const [posts, setPosts] = useState([...]); - Este é um estado que armazena a lista de tarefas. Cada tarefa é um objeto com id, owner e content.
  
  const [newPost, setNewPost] = useState('');

  //const [newPost, setNewPost] = useState(''); - Este é um estado que armazena a nova tarefa que o usuário digita no campo de entrada.
  
  const handleDelete = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  //handleDelete(id) - Esta função é chamada quando o usuário clica no botão ‘Deletar’. Ela remove a tarefa com o id fornecido da lista de tarefas.

  const atualizaContentDoPost = (id, novoConteudo) => {
    setPosts(prevPosts => prevPosts.map((post) => {
      if (post.id === Number(id)) {
        return { ...post, content: novoConteudo };
      } else {
        return post;
      }
    }));
  };

  //atualizaContentDoPost(id, novoConteudo) - Esta função é chamada quando o usuário termina de editar o conteúdo de uma tarefa.
  //Ela atualiza o conteúdo da tarefa com o id fornecido para o novoConteudo.

  const handleSubmit = (event) => {
    event.preventDefault();
    const post = {
      id: Date.now(),
      owner: 'gustavolara',
      content: newPost
    };
    setPosts([post, ...posts]);
    setNewPost('');
  };

  //handleSubmit(event) - Esta função é chamada quando o usuário submete o formulário para criar uma nova tarefa. 
  //Ela cria uma nova tarefa com o conteúdo do estado newPost e adiciona-a ao início da lista de tarefas.


  return (
    <div className="App">
      <nav className="Nav">
        <h1>ToDoList</h1>
      </nav>

      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          name="campoCriaPost"
          placeholder="Crie sua tarefa"
        />
        <button type="submit">Criar</button>
      </form>

      <div className="listaDePosts">

        {posts.map((post) => (
          <div key={post.id}>
            <span
              contentEditable onBlur=
              {(e) => atualizaContentDoPost(post.id, e.target.textContent)}>

              {post.content}
            </span>
            
            <div className='buttons'>
              <button className='Deletar' onClick={() => handleDelete(post.id)}>Deletar</button>
              <button className='Concluir' onClick={() => handleDelete(post.id)}>Concluir</button>
            </div>

          </div>
        ))}

      </div>
      
    </div>
  );
};
export default App;
