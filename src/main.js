import './style.css'

// Criar a estrutura da landing page
document.querySelector('#root').innerHTML = `
  <div class="min-h-screen bg-white">
    <!-- Header com logo -->
    <header class="bg-white shadow-sm px-4 py-3">
      <div class="max-w-6xl mx-auto flex items-center justify-between">
        <img src="https://primeirodollar.store/eletroprime-logo-new-DSU3K9vw.png" alt="EletroPrime" class="h-8">
        <div class="text-sm text-gray-600">
          <span class="font-semibold">Frete Grátis</span> para todo Brasil
        </div>
      </div>
    </header>

    <!-- Oferta principal -->
    <div class="bg-orange-600 text-white px-4 py-3 mx-4 rounded-lg mt-4">
      <div class="flex items-center justify-between">
        <div class="price-container">
          <span class="price-text">R$ 69,00</span>
          <span class="text-sm opacity-90">65% OFF</span>
        </div>
        <div class="bg-black bg-opacity-20 px-3 py-1 rounded text-sm font-semibold">
          OFERTA RELÂMPAGO!
        </div>
      </div>
      <div class="flex items-center justify-between mt-2 text-sm">
        <div>
          <span class="line-through opacity-75">R$ 196,99</span>
          <span class="ml-2 font-semibold">Economize R$ 127,99</span>
        </div>
        <div class="font-semibold">
          Termina em <span id="countdown">01:14:59</span>
        </div>
      </div>
    </div>

    <!-- Produto principal -->
    <div class="max-w-6xl mx-auto px-4 py-8">
      <div class="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <img src="https://primeirodollar.store/14337539-3779-44f4-a544-8066ecaabd64.png" alt="Kit de Furadeira Multifuncional" class="w-full rounded-lg shadow-lg">
        </div>
        <div>
          <h1 class="text-3xl font-bold text-gray-900 mb-4">
            Kit de Furadeira Multifuncional Completo
          </h1>
          <p class="text-lg text-gray-600 mb-6">
            Ferramenta completa para todos os seus projetos domésticos e profissionais. 
            Com múltiplas funções em um só equipamento!
          </p>
          
          <div class="space-y-3 mb-6">
            <div class="flex items-center gap-3">
              <span class="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>Múltiplas velocidades e torques</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>Kit completo com brocas e acessórios</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>Bateria de longa duração</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>Garantia de 1 ano</span>
            </div>
          </div>

          <button onclick="window.open('https://pay.arecompensaoficial.cloud/uXrYmlia', '_blank')" class="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-lg text-lg transition-colors">
            🛒 COMPRAR AGORA - R$ 69,00
          </button>
          
          <div class="mt-4 text-center text-sm text-gray-600">
            <p>✅ Frete Grátis | ✅ Garantia 1 Ano | ✅ Pagamento Seguro</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Galeria de imagens -->
    <div class="bg-gray-50 py-12">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-2xl font-bold text-center mb-8">Veja o Kit Completo</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <img src="https://primeirodollar.store/3050a206-4579-44ff-98a6-ab8d93ec9242.png" alt="Furadeira" class="w-full rounded-lg shadow">
          <img src="https://primeirodollar.store/3158d6a9-a80e-4bc7-9145-d9812995017b.png" alt="Acessórios" class="w-full rounded-lg shadow">
          <img src="https://primeirodollar.store/5aa0c82c-e71d-41b1-8e1a-23a526064b7f.png" alt="Brocas" class="w-full rounded-lg shadow">
          <img src="https://primeirodollar.store/63b6ffce-fe37-4b93-9512-b95c755be802.png" alt="Kit Completo" class="w-full rounded-lg shadow">
        </div>
      </div>
    </div>

    <!-- Depoimentos -->
    <div class="py-12">
      <div class="max-w-4xl mx-auto px-4">
        <h2 class="text-2xl font-bold text-center mb-8">O que nossos clientes dizem</h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-white p-6 rounded-lg shadow-lg border">
            <div class="flex items-center mb-4">
              <div class="flex text-yellow-400">
                ⭐⭐⭐⭐⭐
              </div>
            </div>
            <p class="text-gray-600 mb-4">"Excelente qualidade! Uso para todos os reparos em casa. Muito prático e potente."</p>
            <p class="font-semibold">- Maria Silva</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-lg border">
            <div class="flex items-center mb-4">
              <div class="flex text-yellow-400">
                ⭐⭐⭐⭐⭐
              </div>
            </div>
            <p class="text-gray-600 mb-4">"Kit completo, chegou rápido e funciona perfeitamente. Recomendo!"</p>
            <p class="font-semibold">- João Santos</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-lg border">
            <div class="flex items-center mb-4">
              <div class="flex text-yellow-400">
                ⭐⭐⭐⭐⭐
              </div>
            </div>
            <p class="text-gray-600 mb-4">"Ótimo custo-benefício. A bateria dura bastante e é muito fácil de usar."</p>
            <p class="font-semibold">- Ana Costa</p>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Final -->
    <div class="bg-orange-600 text-white py-12">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-4">Não Perca Esta Oportunidade!</h2>
        <p class="text-xl mb-6">Kit de Furadeira Multifuncional com 65% OFF</p>
        <div class="mb-6">
          <span class="text-4xl font-bold">R$ 69,00</span>
          <span class="text-lg ml-2 line-through opacity-75">R$ 196,99</span>
        </div>
        <button onclick="window.open('https://pay.arecompensaoficial.cloud/uXrYmlia', '_blank')" class="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors">
          🛒 GARANTIR MINHA OFERTA AGORA
        </button>
        <p class="mt-4 text-sm">Oferta válida por tempo limitado | Frete Grátis | Garantia 1 Ano</p>
      </div>
    </div>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-8">
      <div class="max-w-6xl mx-auto px-4 text-center">
        <p>&copy; 2024 EletroPrime. Todos os direitos reservados.</p>
        <p class="mt-2 text-sm text-gray-400">Compra 100% segura e protegida</p>
      </div>
    </footer>
  </div>
`

// Countdown timer
function startCountdown() {
  const countdownElement = document.getElementById('countdown');
  let timeLeft = 1 * 60 * 60 + 14 * 60 + 59; // 1h 14m 59s em segundos

  function updateCountdown() {
    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;

    countdownElement.textContent = 
      `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    if (timeLeft > 0) {
      timeLeft--;
    } else {
      timeLeft = 1 * 60 * 60 + 14 * 60 + 59; // Reset countdown
    }
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}

// Iniciar countdown quando a página carregar
startCountdown();