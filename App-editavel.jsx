import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Heart, Users, Calendar, CheckCircle, Star, Phone, Mail, MapPin, Clock } from 'lucide-react'
import { siteConfig } from './config/content.js'
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
              <h1 className="text-2xl font-bold text-gray-900">{siteConfig.siteName}</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-gray-700 hover:text-green-600 transition-colors">Início</a>
              <a href="#sobre" className="text-gray-700 hover:text-green-600 transition-colors">Sobre</a>
              <a href="#servicos" className="text-gray-700 hover:text-green-600 transition-colors">Serviços</a>
              <a href="#depoimentos" className="text-gray-700 hover:text-green-600 transition-colors">Depoimentos</a>
              <a href="#contato" className="text-gray-700 hover:text-green-600 transition-colors">Contato</a>
            </nav>
            <Button 
  className="bg-green-600 hover:bg-green-700"
  onClick={() => window.open(`https://wa.me/55${siteConfig.contato.telefone.replace(/\D/g, '' )}?text=Olá! Gostaria de agendar uma consulta nutricional.`, '_blank')}
>
  <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
  </svg>
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
                {siteConfig.tagline}
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                {siteConfig.description}
              </p>
<div className="flex flex-col sm:flex-row gap-4">
  <Button 
    size="lg" 
    className="bg-green-600 hover:bg-green-700"
    onClick={() => window.open(`https://wa.me/55${siteConfig.contato.telefone.replace(/\D/g, '' )}?text=Olá! Gostaria de agendar uma consulta nutricional.`, '_blank')}
  >
    <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
    </svg>
    Agendar Consulta
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
              Sobre o Nutricionista
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
  {siteConfig.nutricionista.descricao}
</p>
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-3xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Heart className="h-16 w-16 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{siteConfig.nutricionista.nome}</h3>
                  <p className="text-gray-600">Nutricionista {siteConfig.nutricionista.crn}</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Experiência e Qualificação</h3>
              <div className="space-y-4">
                {siteConfig.nutricionista.formacao.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.titulo}</h4>
                      <p className="text-gray-600">{item.instituicao}</p>
                    </div>
                  </div>
                ))}
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
            {siteConfig.servicos.map((servico, index) => {
              const icons = [Users, Heart, Calendar];
              const IconComponent = icons[index];
              const colors = ['green', 'blue', 'purple'];
              const color = colors[index];
              
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className={`w-12 h-12 bg-${color}-100 rounded-lg flex items-center justify-center mb-4`}>
                      <IconComponent className={`h-6 w-6 text-${color}-600`} />
                    </div>
                    <CardTitle>{servico.titulo}</CardTitle>
                    <CardDescription>
                      {servico.descricao}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      {servico.beneficios.map((beneficio, beneficioIndex) => (
                        <li key={beneficioIndex} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                          {beneficio}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4">
                      <Badge variant="secondary">{servico.preco}</Badge>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
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
            {siteConfig.depoimentos.map((depoimento, index) => {
              const colors = ['green', 'blue', 'purple'];
              const color = colors[index];
              
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4">
                      "{depoimento.texto}"
                    </p>
                    <div className="flex items-center">
                      <div className={`w-10 h-10 bg-${color}-100 rounded-full flex items-center justify-center mr-3`}>
                        <span className={`text-${color}-600 font-semibold`}>{depoimento.inicial}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{depoimento.nome}</h4>
                        <p className="text-sm text-gray-600">{depoimento.tempo}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
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
                    <p className="text-gray-600">{siteConfig.contato.telefone}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">E-mail</h4>
                    <p className="text-gray-600">{siteConfig.contato.email}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Localização</h4>
                    <p className="text-gray-600">{siteConfig.contato.localizacao}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Horário de Atendimento</h4>
                    <p className="text-gray-600">{siteConfig.contato.horarios.semana}</p>
                    <p className="text-gray-600">{siteConfig.contato.horarios.sabadodomingo}</p>
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
                <h3 className="text-2xl font-bold">{siteConfig.siteName}</h3>
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
                <li>{siteConfig.contato.telefone}</li>
                <li>{siteConfig.contato.email}</li>
                <li>{siteConfig.contato.localizacao}</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 {siteConfig.siteName}. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

