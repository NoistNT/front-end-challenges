import api from '@/api/api'
import { Pokemon } from '@/types/types'

export const fetchData = async (
  setPokemon: React.Dispatch<React.SetStateAction<Pokemon>>
) => setPokemon(await api.random())

export const sanitizeName = (name: string) =>
  name.toLowerCase().trim().replace(/[-.]/g, ' ').replace(/ +/g, ' ')
