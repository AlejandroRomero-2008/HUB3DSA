// Contrato del mapa curricular de las capturas aportadas por el estudiante.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const context = { window: {} };
vm.createContext(context);
vm.runInContext(fs.readFileSync(path.join(__dirname, '../data/modulos.js'), 'utf8'), context);
const { MODULOS, TEMAS, MODULO_POR_TEMA } = context.window;
assert.equal(MODULOS.length, 9, 'Una tarjeta por cada módulo BTVDS 3.0–3.8');
assert.equal(TEMAS.length, 17, 'Se conservan los temas del portal anterior');
const teachers = ['julio', 'arcides', 'arcides', 'javier', 'javier', 'arcides', 'javier', 'julio', 'javier'];
const assigned = new Set();
for (const [i, module] of MODULOS.entries()) {
  assert.equal(module.codigo, `BTVDS 3.${i}`);
  assert.equal(module.docenteId, teachers[i]);
  assert(module.titulo.length > 15);
  for (const [field, min] of [['aprendizajes', 3], ['instrumentos', 2], ['programas', 2], ['herramientas', 2], ['recursos', 3], ['quiz', 3]]) {
    assert(module[field].length >= min, `${module.codigo}: mínimo de ${field}`);
  }
  for (const topic of module.temas) {
    assert(!assigned.has(topic.id), `Tema duplicado: ${topic.id}`);
    assigned.add(topic.id);
    assert.equal(MODULO_POR_TEMA[topic.id], module.id);
    for (const question of topic.quiz) assert(module.quiz.some(q => q.p === question.p && q.explica === question.explica));
  }
  for (const question of module.quiz) {
    assert(Number.isInteger(question.correcta));
    assert(question.opciones[question.correcta]);
    assert(question.explica);
  }
  for (const item of [...module.recursos, ...module.evidencias]) {
    const file = item.url || item.img;
    if (file && !/^https?:/.test(file)) assert(fs.existsSync(path.join(__dirname, '..', file)), `Archivo no encontrado: ${file}`);
  }
}
assert.equal(assigned.size, TEMAS.length, 'Ningún tema queda huérfano');
assert.equal(MODULOS.reduce((n, m) => n + m.quiz.length, 0), 57);
console.log('OK: 9 módulos oficiales, docentes 4/3/2, 17 temas sin duplicados ni pérdidas, 57 preguntas y archivos internos válidos.');
