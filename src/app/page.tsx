"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import MediaAbout from '@/components/sections/about/MediaAbout';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import FeatureCardTwentyFour from '@/components/sections/feature/FeatureCardTwentyFour';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Award, Building2, CheckCircle, Crown, Globe, Mail, MessageSquare, Shield, Sparkles, Star, Target, TrendingUp, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="medium"
      sizing="mediumSizeLargeTitles"
      background="circleGradient"
      cardStyle="gradient-radial"
      primaryButtonStyle="flat"
      secondaryButtonStyle="glass"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          brandName="Prince Food"
          navItems={[
            { name: "Our Story", id: "about" },
            { name: "Ingredients", id: "products" },
            { name: "Quality", id: "metrics" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          button={{ text: "Explore Our Flavours", href: "contact" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Bold Flavour Royal Quality"
          description="Prince Food delivers premium, handcrafted ingredients from Leicester with uncompromising attention to flavour and consistency. Trusted by businesses and discerning customers who refuse to compromise on taste."
          background={{ variant: "sparkles-gradient" }}
          tag="Leicester Heritage"
          tagIcon={Crown}
          tagAnimation="slide-up"
          buttons={[
            { text: "Explore Our Flavours", href: "products" },
            { text: "Learn More", href: "about" }
          ]}
          buttonAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/side-view-people-working-beer-factory_23-2150573968.jpg"
          imageAlt="Premium handcrafted ingredients from Prince Food"
          mediaAnimation="blur-reveal"
        />
      </div>

      <div id="about" data-section="about">
        <MediaAbout
          title="Crafted with Royal Precision"
          description="Since establishing our Leicester facility, Prince Food has been dedicated to producing premium ingredients that meet the exacting standards of the finest chefs, restaurants, and food manufacturers. Every batch reflects our commitment to excellence through meticulous quality control and sourcing only the finest raw materials."
          tag="Our Craft"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          buttons={[
            { text: "Discover Our Process", href: "metrics" }
          ]}
          buttonAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/arab-man-uses-cellphone-eco-products_482257-76123.jpg"
          imageAlt="Prince Food production facility showcasing artisanal craftsmanship"
          useInvertedBackground={false}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardTwo
          title="Premium Ingredient Collection"
          description="Explore our carefully curated selection of handcrafted ingredients, each formulated to deliver bold, authentic flavour to your creations."
          tag="Handcrafted Excellence"
          tagIcon={Award}
          tagAnimation="slide-up"
          buttons={[
            { text: "Request Sample Kit", href: "contact" }
          ]}
          buttonAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          products={[
            {
              id: "1",              brand: "Prince Food",              name: "Royal Spice Blend",              price: "£45.00",              rating: 5,
              reviewCount: "247",              imageSrc: "http://img.b2bpic.net/free-photo/arrangement-healthy-spices-spoons-napkins_23-2148425587.jpg",              imageAlt: "Royal Spice Blend premium ingredient"
            },
            {
              id: "2",              brand: "Prince Food",              name: "Heritage Flavour Concentrate",              price: "£52.50",              rating: 5,
              reviewCount: "189",              imageSrc: "http://img.b2bpic.net/free-photo/ingredients-isolated-black-surface_114579-19291.jpg",              imageAlt: "Heritage Flavour Concentrate luxury ingredient"
            },
            {
              id: "3",              brand: "Prince Food",              name: "Artisan Seasoning Medley",              price: "£38.00",              rating: 5,
              reviewCount: "312",              imageSrc: "http://img.b2bpic.net/free-photo/still-life-stacked-aesthetic-objects_23-2150185353.jpg",              imageAlt: "Artisan Seasoning Medley handcrafted blend"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardThree
          title="Trusted by Industry Leaders"
          description="Prince Food's commitment to excellence is reflected in the trust of premium businesses and chefs worldwide."
          tag="Impact & Trust"
          tagIcon={Target}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          metrics={[
            { id: "1", icon: Building2, title: "B2B Clients", value: "500+" },
            { id: "2", icon: Users, title: "Michelin Stars", value: "50+" },
            { id: "3", icon: CheckCircle, title: "Quality Assurance", value: "100%" },
            { id: "4", icon: Globe, title: "Export Countries", value: "15+" }
          ]}
          animationType="slide-up"
          carouselMode="buttons"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwentyFour
          title="The Prince Food Difference"
          description="What sets our premium ingredients apart in the competitive food industry"
          tag="Quality Standards"
          tagIcon={Shield}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          features={[
            {
              id: "1",              title: "Uncompromising Quality Control",              author: "Production Team",              description: "Every batch undergoes rigorous testing and verification to ensure consistent excellence. We maintain laboratory-standard specifications that exceed industry requirements.",              tags: ["Tested", "Verified", "Premium"],
              imageSrc: "http://img.b2bpic.net/free-photo/doctors-working-together-medical-research_23-2149345459.jpg",              imageAlt: "Quality control testing at Prince Food facility"
            },
            {
              id: "2",              title: "Ethical Ingredient Sourcing",              author: "Procurement",              description: "We partner with trusted suppliers who share our commitment to quality and sustainability. Every ingredient is selected for its purity, provenance, and contribution to bold flavour profiles.",              tags: ["Ethical", "Sourced", "Sustainable"],
              imageSrc: "http://img.b2bpic.net/free-photo/bowl-chickpeas-are-poured-with-salt-beer-setup_140725-1648.jpg",              imageAlt: "Premium ingredient sourcing and supplier relationships"
            }
          ]}
          animationType="slide-up"
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Premium Brands"
          description="Leading hospitality, retail, and food service businesses rely on Prince Food for their ingredient needs"
          tag="Industry Leaders"
          tagIcon={Star}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          names={["Michelin Restaurants", "Premium Hotels", "Specialty Food Retailers", "Professional Caterers", "Food Distributors", "Culinary Institutes", "Fine Dining Establishments"]}
          logos={[
            "http://img.b2bpic.net/free-vector/vegan-food-labels-collection_1324-64.jpg",            "http://img.b2bpic.net/free-vector/gradient-dome-design-template_23-2149837188.jpg",            "http://img.b2bpic.net/free-vector/soap-label-collection_23-2148717014.jpg",            "http://img.b2bpic.net/free-vector/creative-modern-restaurant-logo_23-2148568454.jpg",            "http://img.b2bpic.net/free-vector/organic-food-label-collection_23-2148052671.jpg",            "http://img.b2bpic.net/free-vector/flat-farm-logo-collection_23-2148185579.jpg",            "http://img.b2bpic.net/free-vector/creative-chef-logo-template_23-2148980377.jpg"
          ]}
          speed={40}
          showCard={true}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTen
          title="Trusted by Industry Leaders"
          description="See what our customers have to say"
          tag="Client Testimonials"
          tagIcon={MessageSquare}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          testimonials={[
            {
              id: "1",              title: "Personalized Excellence",              quote: "Prince Food ingredients are non-negotiable in our kitchen. The consistency and bold flavour profiles elevate every dish. Their commitment to quality matches our own exacting standards.",              name: "Chef Marcus Richardson",              role: "Michelin-Starred Chef",              imageSrc: "http://img.b2bpic.net/free-photo/happy-young-professional-posing-office_1262-21170.jpg",              imageAlt: "Chef Marcus Richardson"
            },
            {
              id: "2",              title: "Reliable Partnership",              quote: "As a hotel group procurement manager, I've evaluated countless suppliers. Prince Food stands out not just for their premium quality but their reliability and professionalism. They've become essential to our operations.",              name: "Sarah Whitmore",              role: "Hotel Group Procurement Manager",              imageSrc: "http://img.b2bpic.net/free-photo/happy-smiling-man-with-amulet-neck-is-posing-photographer-dark-photo-studio_613910-3849.jpg",              imageAlt: "Sarah Whitmore"
            },
            {
              id: "3",              title: "Customer Favorites",              quote: "Our customers specifically request Prince Food ingredients. The handcrafted nature and authentic flavour are exactly what discerning food lovers are searching for. We wouldn't stock anything else.",              name: "David Chen",              role: "Gourmet Retail Owner",              imageSrc: "http://img.b2bpic.net/free-photo/smiling-businessman-standing-airport-terminal_107420-85070.jpg",              imageAlt: "David Chen"
            },
            {
              id: "4",              title: "Business Transformation",              quote: "Working with Prince Food has transformed our catering business. Their premium ingredients allow us to deliver exceptional experiences that keep clients coming back. The support and communication are outstanding.",              name: "Emma Sutton",              role: "Elite Catering Director",              imageSrc: "http://img.b2bpic.net/free-photo/portrait-woman-smiling-kitchen_107420-12357.jpg",              imageAlt: "Emma Sutton"
            }
          ]}
          animationType="slide-up"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get in Touch"
          title="Partner with Prince Food"
          description="Whether you're a B2B buyer seeking premium ingredients or a chef exploring collaboration opportunities, we're ready to discuss how Prince Food can elevate your offerings."
          tagIcon={Mail}
          tagAnimation="slide-up"
          background={{ variant: "sparkles-gradient" }}
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-vector/moonlight-design-template_23-2149688279.jpg"
          imageAlt="Contact Prince Food for premium ingredients"
          mediaAnimation="blur-reveal"
          mediaPosition="right"
          inputPlaceholder="your@business.com"
          buttonText="Start a Conversation"
          termsText="We respect your privacy and will only use your information to discuss partnership opportunities with Prince Food."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Prince Food"
          columns={[
            {
              items: [
                { label: "Our Story", href: "#about" },
                { label: "Ingredients", href: "#products" },
                { label: "Quality Promise", href: "#metrics" }
              ]
            },
            {
              items: [
                { label: "For Businesses", href: "#" },
                { label: "Bulk Orders", href: "contact" },
                { label: "Partnerships", href: "contact" }
              ]
            },
            {
              items: [
                { label: "Contact", href: "#contact" },
                { label: "Support", href: "#" },
                { label: "Privacy", href: "#" }
              ]
            },
            {
              items: [
                { label: "LinkedIn", href: "https://www.linkedin.com" },
                { label: "Instagram", href: "https://www.instagram.com" },
                { label: "Email", href: "mailto:hello@princefood.co.uk" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}