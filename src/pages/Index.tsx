import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-devices.jpg";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="scroll-snap-container">
      {/* Sticky Header */}
      <header className="fixed top-0 left-0 right-0 z-50 header-backdrop">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-semibold text-foreground">GwisePH</div>
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('iphone')}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                iPhone
              </button>
              <button 
                onClick={() => scrollToSection('macbook')}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                MacBook
              </button>
              <button 
                onClick={() => scrollToSection('ipad')}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                iPad
              </button>
              <button 
                onClick={() => scrollToSection('android')}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Android Phones
              </button>
              <button 
                onClick={() => scrollToSection('wearables')}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Wearables
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="scroll-snap-section flex items-center justify-center bg-background pt-20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-light text-foreground mb-6 leading-tight">
              Compare Tech.
              <br />
              <span className="font-medium">Choose Wisely.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 font-light">
              Find the best deals on iPhone, MacBook, iPad, Android phones, and wearables in the Philippines.
            </p>
            <div className="mb-16">
              <Button 
                onClick={() => scrollToSection('iphone')}
                className="apple-button text-lg px-8 py-4"
              >
                Compare Prices
              </Button>
            </div>
            <div className="max-w-5xl mx-auto">
              <img 
                src={heroImage} 
                alt="Apple devices - iPhone, MacBook, iPad" 
                className="w-full h-auto object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* iPhone Section */}
      <section id="iphone" className="scroll-snap-section flex items-center justify-center bg-muted">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-light text-foreground mb-8">iPhone</h2>
            <p className="text-xl text-muted-foreground mb-12 font-light max-w-2xl mx-auto">
              Discover the latest iPhone models and compare prices from top retailers across the Philippines.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background rounded-3xl p-8 shadow-lg">
                <h3 className="text-2xl font-medium mb-4">iPhone 15 Pro</h3>
                <p className="text-muted-foreground mb-6">Starting at ₱69,990</p>
                <Button variant="outline" className="w-full">View Deals</Button>
              </div>
              <div className="bg-background rounded-3xl p-8 shadow-lg">
                <h3 className="text-2xl font-medium mb-4">iPhone 15</h3>
                <p className="text-muted-foreground mb-6">Starting at ₱54,990</p>
                <Button variant="outline" className="w-full">View Deals</Button>
              </div>
              <div className="bg-background rounded-3xl p-8 shadow-lg">
                <h3 className="text-2xl font-medium mb-4">iPhone 14</h3>
                <p className="text-muted-foreground mb-6">Starting at ₱44,990</p>
                <Button variant="outline" className="w-full">View Deals</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MacBook Section */}
      <section id="macbook" className="scroll-snap-section flex items-center justify-center bg-background">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-light text-foreground mb-8">MacBook</h2>
            <p className="text-xl text-muted-foreground mb-12 font-light max-w-2xl mx-auto">
              Find the perfect MacBook for your needs. Compare specifications and prices across retailers.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-muted rounded-3xl p-8 shadow-lg">
                <h3 className="text-2xl font-medium mb-4">MacBook Air M3</h3>
                <p className="text-muted-foreground mb-6">Starting at ₱69,990</p>
                <Button variant="outline" className="w-full">View Deals</Button>
              </div>
              <div className="bg-muted rounded-3xl p-8 shadow-lg">
                <h3 className="text-2xl font-medium mb-4">MacBook Pro M3</h3>
                <p className="text-muted-foreground mb-6">Starting at ₱94,990</p>
                <Button variant="outline" className="w-full">View Deals</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* iPad Section */}
      <section id="ipad" className="scroll-snap-section flex items-center justify-center bg-muted">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-light text-foreground mb-8">iPad</h2>
            <p className="text-xl text-muted-foreground mb-12 font-light max-w-2xl mx-auto">
              Explore the versatile iPad lineup. From creativity to productivity, find your perfect match.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background rounded-3xl p-8 shadow-lg">
                <h3 className="text-2xl font-medium mb-4">iPad Pro</h3>
                <p className="text-muted-foreground mb-6">Starting at ₱54,990</p>
                <Button variant="outline" className="w-full">View Deals</Button>
              </div>
              <div className="bg-background rounded-3xl p-8 shadow-lg">
                <h3 className="text-2xl font-medium mb-4">iPad Air</h3>
                <p className="text-muted-foreground mb-6">Starting at ₱34,990</p>
                <Button variant="outline" className="w-full">View Deals</Button>
              </div>
              <div className="bg-background rounded-3xl p-8 shadow-lg">
                <h3 className="text-2xl font-medium mb-4">iPad</h3>
                <p className="text-muted-foreground mb-6">Starting at ₱21,990</p>
                <Button variant="outline" className="w-full">View Deals</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Android Phones Section */}
      <section id="android" className="scroll-snap-section flex items-center justify-center bg-background">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-light text-foreground mb-8">Android Phones</h2>
            <p className="text-xl text-muted-foreground mb-12 font-light max-w-2xl mx-auto">
              Discover the best Android smartphones from Samsung, Google, OnePlus, and more.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-muted rounded-3xl p-8 shadow-lg">
                <h3 className="text-2xl font-medium mb-4">Samsung Galaxy S24</h3>
                <p className="text-muted-foreground mb-6">Starting at ₱59,990</p>
                <Button variant="outline" className="w-full">View Deals</Button>
              </div>
              <div className="bg-muted rounded-3xl p-8 shadow-lg">
                <h3 className="text-2xl font-medium mb-4">Google Pixel 8</h3>
                <p className="text-muted-foreground mb-6">Starting at ₱39,990</p>
                <Button variant="outline" className="w-full">View Deals</Button>
              </div>
              <div className="bg-muted rounded-3xl p-8 shadow-lg">
                <h3 className="text-2xl font-medium mb-4">OnePlus 12</h3>
                <p className="text-muted-foreground mb-6">Starting at ₱49,990</p>
                <Button variant="outline" className="w-full">View Deals</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wearables Section */}
      <section id="wearables" className="scroll-snap-section flex items-center justify-center bg-muted">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-light text-foreground mb-8">Wearables</h2>
            <p className="text-xl text-muted-foreground mb-12 font-light max-w-2xl mx-auto">
              Stay connected with the latest smartwatches and fitness trackers from top brands.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background rounded-3xl p-8 shadow-lg">
                <h3 className="text-2xl font-medium mb-4">Apple Watch Series 9</h3>
                <p className="text-muted-foreground mb-6">Starting at ₱23,990</p>
                <Button variant="outline" className="w-full">View Deals</Button>
              </div>
              <div className="bg-background rounded-3xl p-8 shadow-lg">
                <h3 className="text-2xl font-medium mb-4">Samsung Galaxy Watch6</h3>
                <p className="text-muted-foreground mb-6">Starting at ₱18,990</p>
                <Button variant="outline" className="w-full">View Deals</Button>
              </div>
              <div className="bg-background rounded-3xl p-8 shadow-lg">
                <h3 className="text-2xl font-medium mb-4">Fitbit Charge 6</h3>
                <p className="text-muted-foreground mb-6">Starting at ₱8,990</p>
                <Button variant="outline" className="w-full">View Deals</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="scroll-snap-section flex items-center justify-center bg-background">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-light text-foreground mb-8">About GwisePH</h2>
            <p className="text-xl text-muted-foreground mb-12 font-light max-w-2xl mx-auto">
              We help Filipinos make informed decisions when buying technology. Compare prices, read reviews, and find the best deals across the Philippines.
            </p>
            <Button className="apple-button text-lg px-8 py-4">
              Start Comparing
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
