import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const projects = [
    {
      id: 1,
      title: 'Творческий проект #1',
      description: 'Описание первого проекта с интересными деталями',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 2,
      title: 'Творческий проект #2',
      description: 'Описание второго проекта с креативным подходом',
      image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800&q=80',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 3,
      title: 'Творческий проект #3',
      description: 'Описание третьего проекта с уникальной концепцией',
      image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&q=80',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      id: 4,
      title: 'Творческий проект #4',
      description: 'Описание четвертого проекта с инновационными решениями',
      image: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=800&q=80',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      id: 5,
      title: 'Творческий проект #5',
      description: 'Описание пятого проекта с современным дизайном',
      image: 'https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?w=800&q=80',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      id: 6,
      title: 'Творческий проект #6',
      description: 'Описание шестого проекта с ярким исполнением',
      image: 'https://images.unsplash.com/photo-1618556450991-2f1af64e8191?w=800&q=80',
      gradient: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-purple-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold gradient-text">МойБлог</h1>
            <div className="flex gap-8">
              <a href="#about" className="text-gray-700 hover:text-primary transition-colors font-semibold">
                Обо мне
              </a>
              <a href="#projects" className="text-gray-700 hover:text-primary transition-colors font-semibold">
                Проекты
              </a>
              <a href="#contact" className="text-gray-700 hover:text-primary transition-colors font-semibold">
                Контакты
              </a>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-6xl font-bold mb-6 leading-tight">
                Создаем <span className="gradient-text">яркие проекты</span> вместе
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Добро пожаловать в мой блог! Здесь я делюсь своими работами, идеями и творческими проектами.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8">
                  Смотреть проекты
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
                <Button size="lg" variant="outline" className="font-semibold border-2">
                  Связаться
                </Button>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="shine-effect rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://cdn.poehali.dev/files/8283de1b-752d-4c22-b2ec-84c0f18139c6.jpg" 
                  alt="Hero" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -z-10 inset-0 bg-gradient-to-r from-purple-400 to-pink-400 blur-3xl opacity-30 animate-float"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-white/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4 gradient-text">Обо мне</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-purple-50 to-white border-purple-100">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                <Icon name="Sparkles" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Креативность</h3>
              <p className="text-gray-600">
                Каждый проект — это возможность создать что-то уникальное и запоминающееся
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-blue-50 to-white border-blue-100">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                <Icon name="Zap" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Инновации</h3>
              <p className="text-gray-600">
                Использую современные подходы и технологии в каждой работе
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-orange-50 to-white border-orange-100">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6">
                <Icon name="Heart" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Внимание к деталям</h3>
              <p className="text-gray-600">
                Качество и проработка каждого элемента — мой приоритет
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4 gradient-text">Галерея проектов</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Подборка моих лучших работ и творческих реализаций
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.id} 
                className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-90 transition-opacity duration-300 z-10`}></div>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button className="bg-white text-gray-900 hover:bg-gray-100 font-semibold">
                      Посмотреть
                      <Icon name="ArrowRight" className="ml-2" size={18} />
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl font-bold mb-6">Свяжитесь со мной</h2>
          <p className="text-xl mb-12 opacity-90">
            Есть идея для проекта? Давайте обсудим, как мы можем воплотить её в жизнь!
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8">
              <Icon name="Mail" className="mr-2" size={20} />
              Email
            </Button>
            <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8">
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Telegram
            </Button>
            <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8">
              <Icon name="Github" className="mr-2" size={20} />
              GitHub
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 bg-gray-900 text-white text-center">
        <p className="opacity-75">© 2024 МойБлог. Все права защищены.</p>
      </footer>
    </div>
  );
};

export default Index;
