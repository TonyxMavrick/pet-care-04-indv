// Service Detail Page JavaScript

const serviceDetails = {
    "veterinary-checkups": {
        title: "Veterinary Checkups",
        icon: "fa-stethoscope",
        image: "https://images.unsplash.com/photo-1759164955427-14ca448a839d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
        description: "Regular veterinary checkups are essential for maintaining your pet's health and detecting potential issues early. Our comprehensive examinations ensure your pet stays happy and healthy for years to come.",
        features: [
            "Complete physical examination",
            "Vital signs monitoring (temperature, heart rate, respiratory rate)",
            "Weight and body condition assessment",
            "Dental health evaluation",
            "Skin and coat inspection",
            "Eyes, ears, and nose examination",
            "Abdominal palpation",
            "Joint and mobility assessment"
        ],
        benefits: [
            "Early detection of health issues",
            "Preventive care recommendations",
            "Vaccination status review",
            "Nutrition and lifestyle guidance",
            "Peace of mind for pet parents"
        ],
        faqs: [
            {
                question: "How often should my pet have a checkup?",
                answer: "We recommend annual checkups for healthy adult pets, and bi-annual checkups for senior pets (7+ years) or those with chronic conditions."
            },
            {
                question: "What should I bring to the appointment?",
                answer: "Please bring your pet's medical records, a list of current medications, and any questions or concerns you may have."
            },
            {
                question: "How long does a typical checkup take?",
                answer: "A standard wellness exam usually takes 20-30 minutes, allowing time for a thorough examination and discussion with the veterinarian."
            }
        ]
    },
    "vaccination-preventive-care": {
        title: "Vaccination & Preventive Care",
        icon: "fa-syringe",
        image: "https://images.unsplash.com/photo-1759164955427-14ca448a839d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
        description: "Protect your pet from preventable diseases with our comprehensive vaccination and preventive care programs. We tailor our approach to your pet's lifestyle, age, and health status.",
        features: [
            "Core vaccinations (rabies, distemper, parvovirus)",
            "Lifestyle-based vaccine recommendations",
            "Flea and tick prevention",
            "Heartworm prevention and testing",
            "Intestinal parasite screening",
            "Vaccination record management",
            "Reminder service for upcoming vaccines",
            "Travel and boarding vaccination certificates"
        ],
        benefits: [
            "Protection from deadly diseases",
            "Long-term cost savings",
            "Reduced risk of parasite infestations",
            "Compliance with local regulations",
            "Safe socialization with other pets"
        ],
        faqs: [
            {
                question: "When should puppies and kittens start vaccinations?",
                answer: "Puppies and kittens typically begin their vaccination series at 6-8 weeks of age, with boosters every 3-4 weeks until 16 weeks old."
            },
            {
                question: "Are there side effects from vaccines?",
                answer: "Most pets experience no side effects. Mild reactions like slight fever or soreness may occur but typically resolve within 24-48 hours."
            },
            {
                question: "How often do adult pets need vaccines?",
                answer: "Core vaccines are typically given every 1-3 years depending on the vaccine and local regulations. We'll create a customized schedule for your pet."
            }
        ]
    },
    "pet-grooming": {
        title: "Pet Grooming",
        icon: "fa-cut",
        image: "https://images.unsplash.com/photo-1611173622933-91942d394b04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
        description: "Our professional grooming services keep your pet looking beautiful and feeling comfortable. From basic baths to full grooming packages, we provide gentle, stress-free care.",
        features: [
            "Bathing with premium, pet-safe shampoos",
            "Breed-specific haircuts and styling",
            "Nail trimming and filing",
            "Ear cleaning",
            "Teeth brushing",
            "Anal gland expression",
            "De-shedding treatments",
            "Flea and tick treatments"
        ],
        benefits: [
            "Improved coat health and shine",
            "Reduced shedding",
            "Early detection of skin issues",
            "Stress-free grooming experience",
            "Fresh, clean-smelling pet"
        ],
        faqs: [
            {
                question: "How often should I groom my pet?",
                answer: "This depends on breed and coat type. Short-haired pets may need grooming every 8-12 weeks, while long-haired breeds often benefit from monthly grooming."
            },
            {
                question: "Do you groom anxious or aggressive pets?",
                answer: "Yes, our experienced groomers are trained to handle pets with various temperaments. We use gentle techniques and can discuss sedation options with our veterinarians if needed."
            },
            {
                question: "Can I stay during the grooming?",
                answer: "While we understand your concern, pets typically do better when owners are not present. We'll call you immediately if any issues arise."
            }
        ]
    },
    "pet-boarding": {
        title: "Pet Boarding",
        icon: "fa-home",
        image: "https://images.unsplash.com/photo-1743763959056-41bbb557272d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
        description: "When you can't be with your pet, trust our safe, comfortable boarding facilities. We provide a home away from home with personalized care and attention.",
        features: [
            "Climate-controlled, spacious accommodations",
            "Individual or group play sessions",
            "Regular exercise and outdoor time",
            "Medication administration",
            "Special diet accommodation",
            "24/7 supervision and monitoring",
            "Daily photo updates for pet parents",
            "Comfortable bedding and toys"
        ],
        benefits: [
            "Peace of mind while traveling",
            "Socialization opportunities",
            "Professional care and monitoring",
            "Safe, secure environment",
            "Veterinary care available on-site"
        ],
        faqs: [
            {
                question: "What vaccinations are required for boarding?",
                answer: "All pets must be current on rabies, distemper, and bordetella (kennel cough) vaccines. We can administer any missing vaccines before boarding."
            },
            {
                question: "Can I bring my pet's food and toys?",
                answer: "Absolutely! We encourage bringing familiar items to help your pet feel comfortable. Please label everything with your pet's name."
            },
            {
                question: "What if my pet needs medication?",
                answer: "Our staff is trained to administer medications. Please bring medications in original containers with clear instructions."
            }
        ]
    },
    "pet-training": {
        title: "Pet Training",
        icon: "fa-graduation-cap",
        image: "https://images.unsplash.com/photo-1620289052446-202137ffa876?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
        description: "Transform your pet's behavior with our professional training programs. Using positive reinforcement methods, we help create well-mannered, confident pets.",
        features: [
            "Basic obedience training",
            "Advanced command training",
            "Behavior modification programs",
            "Puppy socialization classes",
            "Leash training",
            "House training assistance",
            "Anxiety and fear management",
            "Aggression management"
        ],
        benefits: [
            "Better communication with your pet",
            "Safer, more enjoyable walks",
            "Reduced behavioral problems",
            "Stronger bond with your pet",
            "Confidence in social situations"
        ],
        faqs: [
            {
                question: "What age should I start training my puppy?",
                answer: "Puppy training can begin as early as 8 weeks old. Early socialization and basic training set the foundation for lifelong good behavior."
            },
            {
                question: "Can you train older dogs?",
                answer: "Yes! Dogs of any age can learn new behaviors. While it may take more time with older dogs, positive reinforcement training is effective at any age."
            },
            {
                question: "Do you offer private or group classes?",
                answer: "We offer both! Private sessions provide one-on-one attention, while group classes offer socialization opportunities. We can help you choose the best option."
            }
        ]
    },
    "nutrition-diet-planning": {
        title: "Nutrition & Diet Planning",
        icon: "fa-apple-alt",
        image: "https://images.unsplash.com/photo-1764249453874-46864677b10e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
        description: "Proper nutrition is the foundation of good health. Our veterinarians create customized diet plans based on your pet's age, activity level, and health conditions.",
        features: [
            "Personalized nutrition assessments",
            "Life-stage appropriate diet recommendations",
            "Weight management programs",
            "Therapeutic diets for medical conditions",
            "Food allergy testing and management",
            "Supplement recommendations",
            "Feeding schedule planning",
            "Body condition scoring"
        ],
        benefits: [
            "Optimal weight maintenance",
            "Improved energy and vitality",
            "Better management of health conditions",
            "Healthier skin and coat",
            "Stronger immune system"
        ],
        faqs: [
            {
                question: "How do I know if my pet is overweight?",
                answer: "During your visit, we'll perform a body condition score. Generally, you should be able to feel your pet's ribs easily without excess fat covering, and see a visible waist."
            },
            {
                question: "Should I feed grain-free food?",
                answer: "Grain-free diets aren't necessary for all pets. We'll evaluate your pet's individual needs and recommend the best diet based on scientific evidence."
            },
            {
                question: "How often should I feed my pet?",
                answer: "This depends on age, size, and health status. Puppies and kittens typically need 3-4 meals daily, while adult pets usually do well with 1-2 meals per day."
            }
        ]
    },
    "dental-care": {
        title: "Dental Care",
        icon: "fa-tooth",
        image: "https://images.unsplash.com/photo-1759164955427-14ca448a839d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
        description: "Dental health is crucial to your pet's overall wellbeing. Our comprehensive dental services prevent painful conditions and keep your pet's smile bright.",
        features: [
            "Professional dental cleaning under anesthesia",
            "Dental X-rays for thorough evaluation",
            "Tooth extractions when necessary",
            "Periodontal disease treatment",
            "Oral tumor screening",
            "At-home dental care instruction",
            "Dental health monitoring",
            "Prescription dental products"
        ],
        benefits: [
            "Prevention of tooth loss",
            "Fresh breath",
            "Reduced risk of organ damage",
            "Pain relief from dental disease",
            "Early detection of oral problems"
        ],
        faqs: [
            {
                question: "How often does my pet need dental cleaning?",
                answer: "Most pets benefit from annual dental cleanings, though some may need more frequent care depending on their dental health and breed."
            },
            {
                question: "Is anesthesia safe for dental procedures?",
                answer: "Yes, we use modern anesthesia protocols with continuous monitoring. Pre-anesthetic bloodwork helps ensure your pet's safety."
            },
            {
                question: "What are signs of dental problems?",
                answer: "Watch for bad breath, difficulty eating, pawing at the mouth, excessive drooling, or visible tartar buildup. Schedule an exam if you notice any of these signs."
            }
        ]
    },
    "emergency-pet-care": {
        title: "Emergency Pet Care",
        icon: "fa-exclamation-triangle",
        image: "https://images.unsplash.com/photo-1759164955427-14ca448a839d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
        description: "When emergencies happen, we're here 24/7. Our equipped facility and experienced emergency team provide life-saving care when your pet needs it most.",
        features: [
            "24/7 emergency veterinary care",
            "Advanced diagnostic equipment",
            "In-house laboratory for rapid results",
            "Surgical suite for emergency procedures",
            "Intensive care unit",
            "Oxygen therapy and ventilator support",
            "Blood transfusion capabilities",
            "Pain management protocols"
        ],
        benefits: [
            "Immediate access to emergency care",
            "Experienced emergency veterinarians",
            "Comprehensive diagnostic capabilities",
            "Seamless transition to specialty care if needed",
            "Communication with your regular veterinarian"
        ],
        faqs: [
            {
                question: "What constitutes a pet emergency?",
                answer: "Emergencies include difficulty breathing, severe bleeding, suspected poisoning, seizures, inability to urinate, trauma, collapse, or extreme pain. When in doubt, call us."
            },
            {
                question: "Should I call before coming in?",
                answer: "If possible, yes. Calling ahead allows us to prepare for your arrival. However, never delay treatment - come immediately in life-threatening situations."
            },
            {
                question: "What should I bring to the emergency visit?",
                answer: "Bring your pet's medical records if available, list of medications, and any substances they may have ingested. Most importantly, bring your pet safely and quickly."
            }
        ]
    }
};

document.addEventListener('DOMContentLoaded', function() {
    // Get service slug from URL
    const urlParams = new URLSearchParams(window.location.search);
    const serviceSlug = urlParams.get('service');
    
    if (serviceSlug && serviceDetails[serviceSlug]) {
        loadServiceDetail(serviceSlug);
    } else {
        // Redirect to services page if no valid service found
        window.location.href = 'services.html';
    }
});

function loadServiceDetail(slug) {
    const service = serviceDetails[slug];
    const contentDiv = document.getElementById('serviceContent');
    
    const html = `
        <!-- Hero Section -->
        <section class="relative h-96">
            <img src="${service.image}" alt="${service.title}" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-black/50"></div>
            <div class="absolute inset-0 flex items-center">
                <div class="container mx-auto px-4">
                    <div class="max-w-3xl text-white">
                        <div class="flex items-center mb-4">
                            <div class="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mr-4">
                                <i class="fas ${service.icon} text-white text-3xl"></i>
                            </div>
                            <h1 class="text-4xl md:text-5xl font-bold">${service.title}</h1>
                        </div>
                        <p class="text-xl text-white/90">${service.description}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Main Content -->
        <section class="py-16">
            <div class="container mx-auto px-4">
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <!-- Main Content Column -->
                    <div class="lg:col-span-2">
                        <!-- Features -->
                        <div class="mb-12">
                            <h2 class="text-3xl font-bold mb-6">What's Included</h2>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                ${service.features.map(feature => `
                                    <div class="flex items-start space-x-3">
                                        <i class="fas fa-check-circle text-orange-600 mt-1"></i>
                                        <span class="text-gray-700">${feature}</span>
                                    </div>
                                `).join('')}
                            </div>
                        </div>

                        <!-- Benefits -->
                        <div class="mb-12">
                            <h2 class="text-3xl font-bold mb-6">Benefits</h2>
                            <div class="bg-orange-50 rounded-lg p-6">
                                <ul class="space-y-3">
                                    ${service.benefits.map(benefit => `
                                        <li class="flex items-start space-x-3">
                                            <i class="fas fa-star text-orange-600 mt-1"></i>
                                            <span class="text-gray-700">${benefit}</span>
                                        </li>
                                    `).join('')}
                                </ul>
                            </div>
                        </div>

                        <!-- FAQs -->
                        <div class="mb-12">
                            <h2 class="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
                            <div class="space-y-4">
                                ${service.faqs.map((faq, index) => `
                                    <div class="accordion-item">
                                        <button class="accordion-button">
                                            <span>${faq.question}</span>
                                            <i class="fas fa-chevron-down accordion-icon"></i>
                                        </button>
                                        <div class="accordion-content">
                                            <p class="text-gray-700">${faq.answer}</p>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>

                    <!-- Sidebar -->
                    <div class="lg:col-span-1">
                        <!-- Contact Card -->
                        <div class="bg-gradient-to-br from-orange-600 to-orange-700 rounded-lg p-6 text-white mb-6 sticky top-24">
                            <h3 class="text-2xl font-bold mb-4">Ready to Book?</h3>
                            <p class="mb-6">Contact us today to schedule an appointment for this service.</p>
                            
                            <div class="space-y-4 mb-6">
                                <a href="tel:+12878327362" class="flex items-center space-x-3 text-white hover:text-orange-100">
                                    <i class="fas fa-phone"></i>
                                    <span>+1-287-832-7362</span>
                                </a>
                                <a href="mailto:care@wecare.in" class="flex items-center space-x-3 text-white hover:text-orange-100">
                                    <i class="fas fa-envelope"></i>
                                    <span>care@wecare.in</span>
                                </a>
                                <div class="flex items-start space-x-3">
                                    <i class="fas fa-clock mt-1"></i>
                                    <div class="text-sm">
                                        <p>Mon-Sat: 8:00 AM - 8:00 PM</p>
                                        <p>Sun: 10:00 AM - 6:00 PM</p>
                                    </div>
                                </div>
                            </div>

                            <a href="contact.html" class="block w-full bg-white text-orange-600 hover:bg-gray-100 text-center px-6 py-3 rounded-md font-semibold">
                                Book Appointment
                            </a>
                        </div>

                        <!-- Emergency Info -->
                        <div class="bg-red-50 border-2 border-red-200 rounded-lg p-6">
                            <div class="flex items-center mb-3">
                                <i class="fas fa-exclamation-triangle text-red-600 text-2xl mr-3"></i>
                                <h3 class="font-bold text-lg">Emergency?</h3>
                            </div>
                            <p class="text-gray-700 text-sm mb-3">
                                If your pet is experiencing a medical emergency, call us immediately or visit our 24/7 emergency facility.
                            </p>
                            <a href="tel:+12878327362" class="block w-full bg-red-600 hover:bg-red-700 text-white text-center px-4 py-2 rounded-md font-semibold">
                                Call Emergency Line
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Related Services -->
        <section class="py-16 bg-gray-50">
            <div class="container mx-auto px-4">
                <h2 class="text-3xl font-bold mb-8 text-center">Related Services</h2>
                <div id="relatedServices" class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <!-- Related services will be loaded here -->
                </div>
            </div>
        </section>
    `;
    
    contentDiv.innerHTML = html;
    
    // Initialize accordions
    if (typeof initAccordions === 'function') {
        initAccordions();
    }
    
    // Load related services
    loadRelatedServices(slug);
}

function loadRelatedServices(currentSlug) {
    const relatedDiv = document.getElementById('relatedServices');
    if (!relatedDiv || !window.siteData) return;
    
    // Get 3 random services that aren't the current one
    const allServices = window.siteData.services.filter(s => s.slug !== currentSlug);
    const shuffled = allServices.sort(() => 0.5 - Math.random());
    const related = shuffled.slice(0, 3);
    
    relatedDiv.innerHTML = related.map(service => `
        <div class="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow">
            <div class="relative h-48 overflow-hidden image-zoom-container">
                <img src="${service.image}" alt="${service.title}" class="w-full h-full object-cover image-zoom">
            </div>
            <div class="p-6">
                <div class="flex items-center mb-3">
                    <div class="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                        <i class="fas ${service.icon} text-orange-600"></i>
                    </div>
                    <h3 class="font-semibold text-lg">${service.title}</h3>
                </div>
                <p class="text-gray-600 text-sm mb-4">${service.shortDescription}</p>
                <a href="service-detail.html?service=${service.slug}" class="text-orange-600 hover:text-orange-700 font-medium inline-flex items-center">
                    View Details
                    <i class="fas fa-arrow-right ml-1"></i>
                </a>
            </div>
        </div>
    `).join('');
}
