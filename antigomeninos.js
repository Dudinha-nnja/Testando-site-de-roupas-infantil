<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="meninos.js"></script>
  <title>Roupas de Meninos</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #fdf3e9;
      font-family: Arial, sans-serif;
    }

    .filtros {
      position: absolute;
      top: 180px; 
      left: 20px;
      width: 150px;
      background-color: #ffffff;
      border-radius: 12px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      padding: 20px;
      display: flex;
      flex-direction: column;
      align-items: stretch;
      gap: 10px;
    }

    .filtros h2 {
      font-size: 16px;
      margin: 0 0 10px;
      color: #333;
      text-align: center;
    }

    .filtros button {
      padding: 10px;
      background-color: #f2f2f2;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-weight: bold;
      transition: all 0.2s ease;
    }

    .filtros button:hover {
      background-color: #d1d1d1;
      transform: scale(1.02);
    }

    .container {
      margin-left: 260px; 
      max-width: calc(100% - 280px); 
      padding: 20px;
    }

    .produtos {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 30px;
    }

    .card {
      background-color: #fff;
      padding: 10px;
      border-radius: 8px;
      text-align: center;
      position: relative;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      max-width: 280px;
    }

    .card .tag {
      position: absolute;
      top: 6px;
      left: 6px;
      font-size: 12px;
      font-weight: bold;
    }

    .card img {
      max-width: 100%;
      height: auto;
      border-radius: 6px;
      max-height: 180px; 
      object-fit: contain;
    }

    .info {
      margin-top: 8px;
    }

    .info h3 {
      font-size: 14px;
      margin: 6px 0 4px;
    }

    .info p {
      font-size: 13px;
      margin: 0;
    }

    .cores span {
      width: 12px;
      height: 12px;
      margin-bottom: 6px;
    }

    .botoes {
      display: flex;
      justify-content: center;
      gap: 8px;
      margin-top: 8px;
    }

    .comprar,
    .carrinho {
      font-size: 12px;
      padding: 6px 10px;
      border-radius: 8px;
      border: #ffffff;
      cursor: pointer;
      text-decoration: none;
    }

    .carrinho {
      background-color: #65be11;
      color: #fff;
    }

    .comprar {
      background-color: #f072a7;
      color: #fff;
    }

    .comprar:hover, .carrinho:hover {
      background-color: #ff2580;
      transform: scale(1.1);
      border-radius: 30px;
      transition: all 0.3s ease;
    }

    /* MODAL */
    .modal-bg {
      display: none;
      position: fixed;
      top: 0; left: 0;
      width: 100%; height: 100%;
      background-color: rgba(0,0,0,0.5);
      backdrop-filter: blur(5px);
      z-index: 99;
      justify-content: center;
      align-items: center;
    }

    .modal {
      background: white;
      border-radius: 15px;
      max-width: 600px;
      width: 90%;
      padding: 30px;
      position: relative;
    }

    .modal img {
      width: 100%;
      max-height: 300px;
      object-fit: contain;
      margin-bottom: 10px;
      border-radius: 10px;
    }

    .modal h2 {
      margin-top: 0;
    }

    .modal .fechar {
      position: absolute;
      top: 10px;
      right: 20px;
      font-size: 20px;
      background: none;
      border: none;
      cursor: pointer;
      font-weight: bold;
    }

    .cores-modal {
      display: flex;
      gap: 10px;
      margin: 10px 0;
    }

    .cores-modal span {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      display: inline-block;
      border: 1px solid #ccc;
    }

    .comprar-modal {
      background-color: #f072a7;
      color: white;
      padding: 10px 20px;
      border-radius: 10px;
      border: none;
      margin-top: 20px;
      cursor: pointer;
      font-weight: bold;
      display: block;
    }

    @media (max-width: 1024px) {
      .produtos {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 768px) {
      .container {
        flex-direction: column;
      }

      .filtros {
        flex-direction: row;
        justify-content: center;
        margin: 0 0 20px 0;
      }

      .produtos {
        grid-template-columns: 1fr;
      }
    }
    .btn-tamanho {
  padding: 8px 12px;
  background-color: #eee;
  border: 1px solid #ccc;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.2s ease;
}

.btn-tamanho.selecionado {
  background-color: #f072a7;
  color: white;
  border: 2px solid #ff2580;
}
.cor-bolinha {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: inline-block;
  border: 2px solid transparent;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-right: 8px; /* espacinho lateral */
}

.cor-bolinha.selecionado {
  transform: scale(1.4);
  border-color: #ff2580;
}


  </style>
</head>
<body>
  <div id="header-container"></div>
  <div id="ESTAÇÕES-container"></div>

<div class="modal-bg" id="modalBg" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.5); backdrop-filter:blur(5px); justify-content:center; align-items:center; z-index:999;">
  <div class="modal" style="background:white; padding:20px; border-radius:16px; max-width:600px; width:90%; position:relative;">
    <button onclick="fecharModal()" style="position:absolute; top:10px; right:20px; background:none; border:none; font-size:18px; cursor:pointer;">✖</button>
    <img id="modalImagem" src="" alt="" style="width:100%; max-height:300px; object-fit:contain; border-radius:10px;">
    <div style="text-align:center; margin:10px 0;">
      <button onclick="mudarImagem(-1)">◀</button>
      <button onclick="mudarImagem(1)">▶</button>
    </div>
    <h2 id="modalNome"></h2>
    <p id="modalPreco"></p>
    <p id="modalDescricao"></p>
<div id="modalTamanhos" style="margin: 10px 0; display: flex; gap: 10px; justify-content: center;"></div>
    <div id="modalCores" style="margin-bottom:10px;"></div>
    <button class="comprar-modal" style="display:block; margin:auto; padding:10px 20px; background:#65be11; color:#fff; border:none; border-radius:8px; font-weight:bold;">Comprar agora</button>
  </div>
</div>



  <div class="filtros">
    <h2>Filtrar por:</h2>
    <button>Tamanhos</button>
    <button>Promoção</button>
    <button>Marcas</button>
  </div>

  <div class="container">
    <main id="produtos" class="produtos"></main>
  </div>

  <!-- MODAL -->
  <div class="modal-bg" id="modalBg">
    <div class="modal" id="modalContent">
      <button class="fechar" onclick="fecharModal()">X</button>
      <img id="modalImagem" src="" alt="">
      <h2 id="modalNome"></h2>
      <p id="modalPreco"></p>
      <p id="modalDescricao"></p>
      <div class="cores-modal" id="modalCores"></div>
      <button class="comprar-modal">Comprar agora</button>
    </div>
  </div>
<img src="img/portifolioMasc/1.png" alt="">
  <script>
    fetch('Header.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('header-container').innerHTML = data;
      });

    fetch('ESTAÇÕES.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('ESTAÇÕES-container').innerHTML = data;
      });

   const produtos = [
    {
      id: 1,
      nome: "Conjunto De Linho",
      preco: "R$ 160,00",
      imagens: [
        "img/portifolioMasc/1.png",
        "img/INDEX/card1.png",
        "img/INDEX/card2.png"
      ],
      cores: ["#000000", "#1e1685", "#2a640b"],
      material: "Linho 100%",
      tamanhos: ["P", "M", "G"],
      descricao: "Conjunto elegante e leve para dias quentes."
    },
     {
      id: 2,
      nome: "Conjunto De Linho",
      preco: "R$ 160,00",
      imagens: [
        "img/portifolioMasc/2.png",
        "img/INDEX/card1.png",
        "img/INDEX/card2.png"
      ],
      cores: ["#1e1685"],
      material: "Linho 100%",
      tamanhos: ["P", "M", "G"],
      descricao: "Conjunto elegante e leve para dias quentes."
    },
     {
      id: 3,
      nome: "Conjunto De Linho",
      preco: "R$ 160,00",
      imagens: [
        "img/portifolioMasc/3.png",
        "img/INDEX/card1.png",
        "img/INDEX/card2.png"
      ],
      cores: [ "#00793c"],
      material: "Linho 100%",
      tamanhos: ["P", "M", "G"],
      descricao: "Conjunto elegante e leve para dias quentes."
    },
     {
      id: 4,
      nome: "Conjunto De Linho",
      preco: "R$ 160,00",
      imagens: [
        "img/portifolioMasc/4.png",
        "img/INDEX/card1.png",
        "img/INDEX/card2.png"
      ],
      cores: ["#000000", "#1e1685", "#c57000"],
      material: "Linho 100%",
      tamanhos: ["P", "M", "G"],
      descricao: "Conjunto elegante e leve para dias quentes."
    },
        {
      id: 5,
      nome: "Conjunto De Linho",
      preco: "R$ 160,00",
      imagens: [
        "img/portifolioMasc/5.png",
        "img/INDEX/card1.png",
        "img/INDEX/card2.png"
      ],
      cores: ["#000000"],
      material: "Linho 100%",
      tamanhos: ["P", "M", "G"],
      descricao: "Conjunto elegante e leve para dias quentes."
    },
     {
      id: 6,
      nome: "Conjunto De Linho",
      preco: "R$ 160,00",
      imagens: [
        "img/portifolioMasc/6.png",
        "img/INDEX/card1.png",
        "img/INDEX/card2.png"
      ],
      cores: ["#000000;"],
      material: "Linho 100%",
      tamanhos: ["P", "M", "G"],
      descricao: "Conjunto elegante e leve para dias quentes."
    },
     {
      id: 7,
      nome: "Conjunto De Linho",
      preco: "R$ 160,00",
      imagens: [
        "img/portifolioMasc/7.png",
        "img/INDEX/card1.png",
        "img/INDEX/card2.png"
      ],
      cores: ["#d8c4aa", "#00793c"],
      material: "Linho 100%",
      tamanhos: ["P", "M", "G"],
      descricao: "Conjunto elegante e leve para dias quentes."
    },
     {
      id: 8,
      nome: "Conjunto De Linho",
      preco: "R$ 160,00",
      imagens: [
        "img/portifolioMasc/8.png",
        "img/INDEX/card1.png",
        "img/INDEX/card2.png"
      ],
      cores: ["#000000;", "#1e1685"],
      material: "Linho 100%",
      tamanhos: ["P", "M", "G"],
      descricao: "Conjunto elegante e leve para dias quentes."
    },
        {
      id: 9,
      nome: "Conjunto De Linho",
      preco: "R$ 160,00",
      imagens: [
        "img/portifolioMasc/9.png",
        "img/INDEX/card1.png",
        "img/INDEX/card2.png"
      ],
      cores: ["#c57000"],
      material: "Linho 100%",
      tamanhos: ["P", "M", "G"],
      descricao: "Conjunto elegante e leve para dias quentes."
    },
     {
      id: 10,
      nome: "Conjunto De Linho",
      preco: "R$ 160,00",
      imagens: [
        "img/portifolioMasc/10.png",
        "img/INDEX/card1.png",
        "img/INDEX/card2.png"
      ],
      cores: ["#000000", "#00793c"],
      material: "Linho 100%",
      tamanhos: ["P", "M", "G"],
      descricao: "Conjunto elegante e leve para dias quentes."
    },
     {
      id: 11,
      nome: "Conjunto De Linho",
      preco: "R$ 160,00",
      imagens: [
        "img/portifolioMasc/11.png",
        "img/INDEX/card1.png",
        "img/INDEX/card2.png"
      ],
      cores: ["#d8c4aa", "#1e1685"],
      material: "Linho 100%",
      tamanhos: ["P", "M", "G"],
      descricao: "Conjunto elegante e leve para dias quentes."
    },
     {
      id: 12,
      nome: "Conjunto De Linho",
      preco: "R$ 160,00",
      imagens: [
        "img/portifolioMasc/12.png",
        "img/INDEX/card1.png",
        "img/INDEX/card2.png"
      ],
      cores: [ "#00793c"],
      material: "Linho 100%",
      tamanhos: ["P", "M", "G"],
      descricao: "Conjunto elegante e leve para dias quentes."
    }
  ];

  const container = document.getElementById("produtos");

  produtos.forEach(produto => {
    const card = document.createElement("div");
    card.classList.add("card");

    const coresHtml = produto.cores.map(cor => `<span style="background-color: ${cor}; display:inline-block; width:12px; height:12px; border-radius:50%;"></span>`).join("");

    card.innerHTML = `
      <span class="tag">New</span>
      <img src="${produto.imagens[0]}" alt="${produto.nome}">
      <div class="info">
        <div class="cores">${coresHtml}</div>
        <h3>${produto.nome}</h3>
        <p>${produto.preco}</p>
        <div class="botoes">
          <button class="comprar" onclick='abrirModal(${JSON.stringify(produto)})'>Comprar</button>
          <button class="carrinho">Carrinho</button>
        </div>
      </div>
    `;

    container.appendChild(card);
  });

  let imagemAtual = 0;
  let imagensProduto = [];

  function abrirModal(produto) {
    imagensProduto = produto.imagens;
    imagemAtual = 0;
    document.getElementById("modalImagem").src = imagensProduto[imagemAtual];
    document.getElementById("modalNome").textContent = produto.nome;
    document.getElementById("modalPreco").textContent = produto.preco;
    document.getElementById("modalDescricao").textContent = produto.descricao;
const tamanhosContainer = document.getElementById("modalTamanhos");
tamanhosContainer.innerHTML = "";
produto.tamanhos.forEach(tamanho => {
  const btn = document.createElement("button");
  btn.textContent = tamanho;
  btn.className = "btn-tamanho";
  btn.onclick = () => {
    document.querySelectorAll(".btn-tamanho").forEach(b => b.classList.remove("selecionado"));
    btn.classList.add("selecionado");
  };
  tamanhosContainer.appendChild(btn);
});
  const coresContainer = document.getElementById("modalCores");
coresContainer.innerHTML = "";

produto.cores.forEach(cor => {
  const span = document.createElement("span");
  span.className = "cor-bolinha";
  span.style.backgroundColor = cor;
  span.onclick = () => {
    document.querySelectorAll(".cor-bolinha").forEach(b => b.classList.remove("selecionado"));
    span.classList.add("selecionado");
  };
  coresContainer.appendChild(span);
});

    document.getElementById("modalBg").style.display = "flex";
  }

  function fecharModal() {
    document.getElementById("modalBg").style.display = "none";
  }

  function mudarImagem(direcao) {
    imagemAtual += direcao;
    if (imagemAtual < 0) imagemAtual = imagensProduto.length - 1;
    if (imagemAtual >= imagensProduto.length) imagemAtual = 0;
    document.getElementById("modalImagem").src = imagensProduto[imagemAtual];
  }
  </script>
</body>
</html>
