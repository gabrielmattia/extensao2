export const PROJECT_FILTER_OPTIONS = [
  { id: 1, label: 'Nome do Edifício', name: 'nome' },
  { id: 2, label: 'Autor do projeto', name: 'autor' },
  { id: 3, label: 'Localidade', name: 'localidade'},
]

export const FILTER_TYPES = {
  nomeOficial: 1,
  autor: 2,
  localidade: 3,
}

export const FILTER_TYPES_MAPPING = {
  1: 'nome_oficial',
  2: 'autor',
  3: 'localidade',
}