import { IconType } from 'react-icons'
import { FaEnvelope, FaWhatsapp, FaLinkedin, FaGithub, FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaFigma, FaMobileAlt, FaCubes, FaCode, FaServer, FaFileAlt } from 'react-icons/fa'
import { SiTypescript, SiTailwindcss, SiJest } from 'react-icons/si'

const map: Record<string, IconType> = {
  FaEnvelope,
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  SiTypescript,
  SiTailwindcss,
  SiJest,
  FaGitAlt,
  FaFigma,
  FaMobileAlt,
  FaCubes,
  FaCode,
  FaServer,
  FaFileAlt,
}

export function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = map[name]
  if (!Cmp) return null
  return <Cmp className={className} aria-hidden="true" />
}
