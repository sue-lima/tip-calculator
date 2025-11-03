<template>
  <main class="min-h-screen flex flex-col items-center justify-center bg-red-700 p-6">
    <h1>Le/Tip</h1>
    <div class="flex gap-2 items-center">
      <label class="text-sm font-medium">Moeda:</label>
      <select class="border rounded p-1">
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
      </select>
    </div>
    <div>
      <input type="number" placeholder="Total da conta" class="border p-2 rounded" />
      <input type="number" placeholder="% Gorjeta" class="border p-2 rounded" />
      <input type="number" placeholder="Nº de pessoas" class="border p-2 rounded" />
    </div>
    <div class="bg-gray-100 p-4 rounded-lg w-full max-w-sm text-center shadow">
      <p><strong>Total: sdjdkjha</strong></p>
      <p><strong>Por pessoa: dasjdkh</strong></p>

      <div class="mt-2">
        <p>Convertido em BRL:</p>
        <p class="text-green-600 font-semibold">fdsjfkhkdhf</p>
      </div>
    </div>
  </main>
</template>



