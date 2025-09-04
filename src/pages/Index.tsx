import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Icon from '@/components/ui/icon'

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Car" size={32} className="text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">Автошкола №1</h1>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Услуги</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">О нас</a>
              <a href="#contacts" className="text-gray-700 hover:text-blue-600 transition-colors">Контакты</a>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                <Icon name="Phone" size={16} className="mr-2" />
                Обратный звонок
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
              Автошкола №1 в Перми
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Обучение вождению любой категории — быстро, качественно, с заботой о каждом ученике.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
              <Icon name="UserPlus" size={20} className="mr-3" />
              Записаться на обучение
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Наши услуги
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Category A */}
            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-blue-50 to-blue-100">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Bike" size={32} className="text-white" />
                </div>
                <CardTitle className="text-2xl text-blue-800">Права категории A</CardTitle>
                <CardDescription className="text-blue-600 font-medium">Обучение на мотоцикл</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-blue-600 mr-2" />
                    Теория + практика
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-blue-600 mr-2" />
                    Индивидуальный подход
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-blue-600 mr-2" />
                    Собственный автодром
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Category B */}
            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-orange-50 to-orange-100">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Car" size={32} className="text-white" />
                </div>
                <CardTitle className="text-2xl text-orange-800">Права категории B</CardTitle>
                <CardDescription className="text-orange-600 font-medium">Обучение на легковой автомобиль</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-orange-600 mr-2" />
                    Современный автопарк
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-orange-600 mr-2" />
                    Онлайн-теория
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-orange-600 mr-2" />
                    Подготовка к экзаменам в ГИБДД
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Category C */}
            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-green-50 to-green-100">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Truck" size={32} className="text-white" />
                </div>
                <CardTitle className="text-2xl text-green-800">Права категории C</CardTitle>
                <CardDescription className="text-green-600 font-medium">Обучение на грузовик</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-600 mr-2" />
                    Опытные инструкторы
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-600 mr-2" />
                    Гибкий график
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-600 mr-2" />
                    Помощь с трудоустройством
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Category D */}
            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-purple-50 to-purple-100">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Bus" size={32} className="text-white" />
                </div>
                <CardTitle className="text-2xl text-purple-800">Права категории D</CardTitle>
                <CardDescription className="text-purple-600 font-medium">Обучение на автобус</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-purple-600 mr-2" />
                    Полная программа подготовки
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-purple-600 mr-2" />
                    Учебная техника
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-purple-600 mr-2" />
                    Сертифицированные инструкторы
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Car Fleet Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">
            Наш автопарк
          </h2>
          <p className="text-xl text-center text-gray-600 mb-16">
            Современные и комфортные автомобили
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/img/e6fa2698-6bb4-4794-8d59-bc908c1b12f1.jpg" 
                  alt="Hyundai Solaris" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">Hyundai Solaris</h3>
                <p className="text-gray-600">Комфортный седан для обучения категории B</p>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/img/04512a85-44b6-4432-9815-71c673e6e095.jpg" 
                  alt="Volkswagen Polo" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">Volkswagen Polo</h3>
                <p className="text-gray-600">Надежный автомобиль европейского качества</p>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/img/24b58de1-3417-440d-bd69-487a2a18ed1c.jpg" 
                  alt="Kia Rio" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">Kia Rio</h3>
                <p className="text-gray-600">Экономичный и практичный автомобиль</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-4 text-gray-600 mb-6">
              <span className="bg-white px-4 py-2 rounded-lg shadow-sm">Hyundai</span>
              <span className="bg-white px-4 py-2 rounded-lg shadow-sm">Kia</span>
              <span className="bg-white px-4 py-2 rounded-lg shadow-sm">Volkswagen</span>
              <span className="bg-white px-4 py-2 rounded-lg shadow-sm">Renault</span>
              <span className="bg-white px-4 py-2 rounded-lg shadow-sm">Skoda</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Почему выбирают нас
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon name="MapPin" size={40} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Собственный автодром</h3>
              <p className="text-gray-600">Не нужно ехать далеко — всё на месте.</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon name="Users" size={40} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Опытные инструкторы</h3>
              <p className="text-gray-600">Профессионалы с человеческим подходом.</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon name="Clock" size={40} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Гибкий график</h3>
              <p className="text-gray-600">Учитесь в удобное для вас время.</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon name="Award" size={40} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Высокий процент сдачи</h3>
              <p className="text-gray-600">80% учеников сдают с первого раза.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Process */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            🛠 Процесс обучения
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                { icon: "FileText", title: "Подача заявки", desc: "Заполните форму на сайте или позвоните." },
                { icon: "Folder", title: "Оформление документов", desc: "Мы поможем собрать всё необходимое." },
                { icon: "BookOpen", title: "Теоретические занятия", desc: "Онлайн и офлайн-форматы на выбор." },
                { icon: "Car", title: "Практические занятия", desc: "Вождение на современных авто." },
                { icon: "Trophy", title: "Сдача экзамена", desc: "Поддержка и сопровождение на всех этапах." }
              ].map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {index + 1}
                  </div>
                  <div className="flex-1 bg-white rounded-lg p-6 shadow-sm">
                    <div className="flex items-center mb-2">
                      <Icon name={step.icon as any} size={24} className="text-blue-600 mr-3" />
                      <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-gray-600">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">О нас</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Наша автошкола — это команда профессионалов с многолетним опытом. Мы обучили более 5000 водителей, и гордимся качеством обучения и отзывами учеников.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              Мы стремимся не просто научить водить, но и сформировать уверенность на дороге.
            </p>
            <p className="text-lg text-gray-600">
              Обучение доступно людям любого возраста, и всегда подбирается индивидуально.
            </p>
          </div>
        </div>
      </section>

      {/* Consultation */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-orange-500 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Получите консультацию специалиста</h2>
          <p className="text-xl mb-8 opacity-90">
            Подберём удобное время, расскажем о стоимости и ответим на все вопросы.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all">
            <Icon name="Send" size={20} className="mr-3" />
            Отправить заявку
          </Button>
        </div>
      </section>

      {/* Staff */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Сотрудники
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Иван Иванов", role: "Инструктор по вождению категории B. Более 10 лет опыта.", icon: "User" },
              { name: "Светлана Петрова", role: "Преподаватель теории. Автор обучающих курсов.", icon: "User" },
              { name: "Алексей Смирнов", role: "Инструктор по категории A и C. Терпеливый и внимательный.", icon: "User" },
              { name: "Мария Кузнецова", role: "Администратор. Поможет с документами и организацией занятий.", icon: "User" }
            ].map((person, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name={person.icon as any} size={40} className="text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{person.name}</h3>
                  <p className="text-gray-600 text-sm">{person.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trial Lesson */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">
            Запишитесь на пробное занятие
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Убедитесь в качестве обучения — приходите на бесплатный пробный урок!
          </p>
          
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Адреса классов:</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                "Ул. Ленина, 10",
                "Ул. Карла Маркса, 52", 
                "Ул. Советская, 7"
              ].map((address, index) => (
                <div key={index} className="flex items-center justify-center space-x-2 bg-gray-50 rounded-lg p-4">
                  <Icon name="MapPin" size={20} className="text-blue-600" />
                  <span className="text-gray-700">{address}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-100 rounded-2xl p-8 mb-8 max-w-4xl mx-auto">
            <h4 className="text-lg font-semibold mb-4 text-gray-800">Интерактивная карта</h4>
            <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Icon name="Map" size={48} className="text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500">Здесь будет размещена Яндекс.Карта</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacts" className="bg-gray-900 text-white py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-lg mb-4">Меню</h4>
              <div className="space-y-2">
                <a href="#about" className="block text-gray-300 hover:text-white transition-colors">О нас</a>
                <a href="#services" className="block text-gray-300 hover:text-white transition-colors">Услуги</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">Преимущества</a>
                <a href="#contacts" className="block text-gray-300 hover:text-white transition-colors">Контакты</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Соцсети</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">ВКонтакте</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">Одноклассники</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">Telegram</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Контакты</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} className="text-gray-400" />
                  <span className="text-gray-300">info@avtoperm.ru</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} className="text-gray-400" />
                  <span className="text-gray-300">+7 (999) 999-99-99</span>
                </div>
              </div>
            </div>
            
            <div>
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                <Icon name="PhoneCall" size={16} className="mr-2" />
                Обратный звонок
              </Button>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2024 Автошкола №1. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}