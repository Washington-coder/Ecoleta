function populateUFs() {
  const ufSelect = document.querySelector("select[name=uf]");

  fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then((res) => res.json())
    .then((states) => {
      for (const state of states) {
        ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`;
      }
    });
}

populateUFs();

function getCities(event) {
  const citySelect = document.querySelector("select[name=city]");
  const stateInput = document.querySelector("input[name=state]");

  const indexOfSelectedState = event.target.selectedIndex;
  stateInput.value = event.target.options[indexOfSelectedState].text;

  const ufValue = event.target.value;
  const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`;
  citySelect.innerHTML = "<option value>Selecione a Cidade</option>";
  citySelect.disabled = true;
  fetch(url)
    .then((res) => res.json())
    .then((cities) => {
      for (const city of cities) {
        citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`;
      }
      citySelect.disabled = false;
    });
}

document.querySelector("select[name=uf]").addEventListener("change", getCities);

// ITENS DE COLETA//
// PEGAR TODOS OS "li" DO HTML
// ATALHO PARA COMENTAR EM BLOCO: CTRL + ";"
// MOVIMENTAÇÃO DE LINHAS: ALT + "SETINHAS"

const itemsToCollect = document.querySelectorAll(".items-grid li");

for (const item of itemsToCollect) {
  item.addEventListener("click", handleSelectedItem);
}

const collectedItems = document.querySelector("input[name=items]");
let seletedItems = [];

function handleSelectedItem(event) {
  const itemLi = event.target;

  // Adicionar ou remover uma classe com javaScript

  itemLi.classList.toggle("selected");
  const itemId = event.target.dataset.id;

  // VERIFICAR SE EXISTEM ITENS SELECIONADOS

  const alreadySelected = seletedItems.findIndex((item) => {
    const itemFound = item == itemId; // COMPARAÇÃO SEM 'IF' COM O '==' RETORNANDO 'TRUE OR FALSE'
    return itemFound;
  });

  // SE SIM: FUNÇÃO => TIRAR DA SELEÇÃO
  if (alreadySelected >= 0) {
    const filteredItems = seletedItems.filter((item) => {
      const itemIsDefferent = item != itemId;
      return itemIsDefferent;
    });
    seletedItems = filteredItems;
  } else {
    // SE NÃO: FUNÇÃO => COLOCAR NA SELEÇÃO
    seletedItems.push(itemId);
  }
  console.log(seletedItems);
  // ATUALIZAR O CAMPO ESCONDIDO COM OS NOMES SELECIONADOS
  collectedItems.value = seletedItems;
}
