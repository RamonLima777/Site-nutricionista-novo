import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Heart, Users, Calendar, CheckCircle, Star, Phone, Mail, MapPin, Clock } from 'lucide-react'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-green-600" />
              <h1 className="text-2xl font-bold text-gray-900">NutriVida</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-gray-700 hover:text-green-600 transition-colors">Início</a>
              <a href="#sobre" className="text-gray-700 hover:text-green-600 transition-colors">Sobre</a>
              <a href="#servicos" className="text-gray-700 hover:text-green-600 transition-colors">Serviços</a>
              <a href="#depoimentos" className="text-gray-700 hover:text-green-600 transition-colors">Depoimentos</a>
              <a href="#contato" className="text-gray-700 hover:text-green-600 transition-colors">Contato</a>
            </nav>
            <Button className="bg-green-600 hover:bg-green-700">
              Agendar Consulta
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Transforme sua vida com 
                <span className="text-green-600"> nutrição personalizada</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Atendimento nutricional remoto com acompanhamento mensal presencial para bioimpedância. 
                Cuide da sua saúde de forma prática e eficiente.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  <Calendar className="mr-2 h-5 w-5" />
                  Agendar Consulta
                </Button>
                <Button size="lg" variant="outline">
                  Saiba Mais
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Atendimento Híbrido</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3" />
                    Consultas online semanais
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3" />
                    Bioimpedância mensal presencial
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3" />
                    Planos alimentares personalizados
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3" />
                    Acompanhamento contínuo
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Sobre a Nutricionista
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Profissional especializada em nutrição clínica e esportiva, com foco em atendimento personalizado 
              e resultados sustentáveis.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-3xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Heart className="h-16 w-16 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Dra. Ana Silva</h3>
                  <p className="text-gray-600">Nutricionista CRN 12345</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Experiência e Qualificação</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Graduação em Nutrição</h4>
                    <p className="text-gray-600">Universidade Federal - 2018</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Especialização em Nutrição Clínica</h4>
                    <p className="text-gray-600">Instituto de Nutrição - 2020</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Certificação em Nutrição Esportiva</h4>
                    <p className="text-gray-600">Associação Brasileira - 2021</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">5+ anos de experiência</h4>
                    <p className="text-gray-600">Atendimento clínico e online</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nossos Serviços
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos um atendimento completo e personalizado para suas necessidades nutricionais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Consulta Nutricional Online</CardTitle>
                <CardDescription>
                  Atendimento personalizado via videochamada com plano alimentar individualizado.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Anamnese completa
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Plano alimentar personalizado
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Orientações nutricionais
                  </li>
                </ul>
                <div className="mt-4">
                  <Badge variant="secondary">A partir de R$ 120</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Bioimpedância Presencial</CardTitle>
                <CardDescription>
                  Avaliação corporal completa com equipamento de bioimpedância de alta precisão.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Análise de composição corporal
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Percentual de gordura e massa magra
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Relatório detalhado
                  </li>
                </ul>
                <div className="mt-4">
                  <Badge variant="secondary">R$ 80 (mensal)</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Acompanhamento Completo</CardTitle>
                <CardDescription>
                  Pacote completo com consultas online e bioimpedância mensal presencial.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    4 consultas online/mês
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    1 bioimpedância/mês
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Suporte via WhatsApp
                  </li>
                </ul>
                <div className="mt-4">
                  <Badge variant="secondary">R$ 400/mês</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section id="depoimentos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              O que nossos clientes dizem
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Resultados reais de pessoas que transformaram suas vidas com nossa ajuda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "O atendimento online é super prático e a bioimpedância mensal me ajuda a acompanhar 
                  meus resultados de forma precisa. Perdi 8kg em 3 meses!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-green-600 font-semibold">M</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Maria Silva</h4>
                    <p className="text-sm text-gray-600">Cliente há 6 meses</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Profissional muito competente! O plano alimentar é personalizado e fácil de seguir. 
                  Recomendo para todos que querem cuidar da saúde."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600 font-semibold">J</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">João Santos</h4>
                    <p className="text-sm text-gray-600">Cliente há 1 ano</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "A combinação de atendimento online com a avaliação presencial é perfeita. 
                  Consegui melhorar minha performance nos treinos!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-purple-600 font-semibold">A</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Ana Costa</h4>
                    <p className="text-sm text-gray-600">Cliente há 8 meses</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Entre em Contato
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pronto para transformar sua vida? Entre em contato e agende sua primeira consulta.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Informações de Contato</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Telefone</h4>
                    <p className="text-gray-600">(11) 99999-9999</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">E-mail</h4>
                    <p className="text-gray-600">contato@nutrivida.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Localização</h4>
                    <p className="text-gray-600">São Paulo, SP - Atendimento domiciliar</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Horário de Atendimento</h4>
                    <p className="text-gray-600">Segunda a Sexta: 8h às 18h</p>
                    <p className="text-gray-600">Sábado: 8h às 12h</p>
                  </div>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Agende sua Consulta</CardTitle>
                <CardDescription>
                  Preencha o formulário abaixo e entraremos em contato em até 24 horas.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      E-mail
                    </label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mensagem
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Conte-nos sobre seus objetivos..."
                    ></textarea>
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="h-8 w-8 text-green-600" />
                <h3 className="text-2xl font-bold">NutriVida</h3>
              </div>
              <p className="text-gray-400">
                Transformando vidas através da nutrição personalizada e acompanhamento profissional.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#inicio" className="hover:text-white transition-colors">Início</a></li>
                <li><a href="#sobre" className="hover:text-white transition-colors">Sobre</a></li>
                <li><a href="#servicos" className="hover:text-white transition-colors">Serviços</a></li>
                <li><a href="#depoimentos" className="hover:text-white transition-colors">Depoimentos</a></li>
                <li><a href="#contato" className="hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-400">
                <li>(11) 99999-9999</li>
                <li>contato@nutrivida.com</li>
                <li>São Paulo, SP</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 NutriVida. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

