import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Linkedin, MessageCircle, Copy, Check } from 'lucide-react';
import './footer.css';

export default function Footer() {
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('trivesha.tech@gmail.com');
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      window.location.href = 'mailto:trivesha.tech@gmail.com';
    }
  };

  const mainPages = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/portfolio', label: 'Portfolio' },
    { to: '/blog', label: 'Blog' }
  ];

  const supportPages = [
    { to: '/contact', label: 'Contact' },
    { to: '/faq', label: 'FAQ' },
    { to: '/privacy', label: 'Privacy' },
    { to: '/terms', label: 'Terms' }
  ];

  return (
    <footer className="new_footer_area bg_color">
      <div className="new_footer_top">
        <div className="container">
          <div className="row">
            {/* Brand Section */}
            <div className="col-lg-4 col-md-12">
              <div className="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s" style={{visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInLeft'}}>
                <Link to="/" className="flex items-center mb-6 group">
                  <img 
                    src="/logo.png" 
                    alt="Trivesha" 
                    className="w-32 h-32 object-contain transition-opacity duration-200 group-hover:opacity-80" 
                  />
                </Link>
                <p className="text-[#6a7695] text-sm leading-relaxed mb-6">
                  Design, development, and DevOps solutions since 2019.
                </p>
                <div className="flex items-center space-x-2">
                  <Mail size={16} className="text-[#E29578]" />
                  <button 
                    onClick={copyEmail}
                    className="text-[#6a7695] hover:text-[#E29578] transition-colors text-sm flex items-center space-x-2 group"
                  >
                    <span>trivesha.tech@gmail.com</span>
                    {emailCopied ? (
                      <Check size={12} className="text-green-500" />
                    ) : (
                      <Copy size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Navigation & Connect Combined */}
            <div className="col-lg-8 col-md-8">
              <div className="f_widget about-widget wow fadeInLeft" data-wow-delay="0.4s" style={{visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInLeft'}}>
                {/* Desktop: Three columns layout */}
                <div className="hidden md:flex md:gap-8 lg:gap-12 xl:gap-16 justify-between w-full">
                  <div className="flex-1 min-w-0">
                    <h3 className="f-title f_600 t_color f_size_18 text-[#263b5e] mb-6">Pages</h3>
                    <ul className="list-unstyled f_list space-y-3">
                      {mainPages.map((page, index) => (
                        <li key={index}>
                          <Link 
                            to={page.to}
                            className="text-[#6a7695] hover:text-[#E29578] transition-colors text-sm"
                          >
                            {page.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="f-title f_600 t_color f_size_18 text-[#263b5e] mb-6">Support</h3>
                    <ul className="list-unstyled f_list space-y-3">
                      {supportPages.map((page, index) => (
                        <li key={index}>
                          <Link 
                            to={page.to}
                            className="text-[#6a7695] hover:text-[#E29578] transition-colors text-sm"
                          >
                            {page.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex-1 min-w-0 max-w-[200px]">
                    <h3 className="f-title f_600 t_color f_size_18 text-[#263b5e] mb-6">Connect</h3>
                    <p className="text-[#6a7695] text-sm mb-4">Let's stay connected</p>
                    <div className="grid grid-cols-2 gap-2 w-full max-w-[120px]">
                      <a 
                        href="https://linkedin.com/company/trivesha" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-3 bg-[#006D77]/10 rounded-lg text-[#006D77] hover:bg-[#0077B5] hover:text-white transition-all duration-300 flex items-center justify-center"
                        aria-label="Follow us on LinkedIn"
                      >
                        <Linkedin size={18} />
                      </a>
                      <a 
                        href="https://wa.me/917330975148" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-3 bg-[#006D77]/10 rounded-lg text-[#006D77] hover:bg-[#25D366] hover:text-white transition-all duration-300 flex items-center justify-center"
                        aria-label="Chat with us on WhatsApp"
                      >
                        <MessageCircle size={18} />
                      </a>
                      <a 
                        href="https://www.justdial.com/trivesha" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-3 bg-[#006D77]/10 rounded-lg text-[#006D77] hover:bg-[#E29578] hover:text-white transition-all duration-300 flex items-center justify-center"
                        aria-label="Find us on JustDial"
                      >
                        <span className="font-bold text-xs">JD</span>
                      </a>
                      <a 
                        href="mailto:trivesha.tech@gmail.com"
                        className="p-3 bg-[#006D77]/10 rounded-lg text-[#006D77] hover:bg-[#EA4335] hover:text-white transition-all duration-300 flex items-center justify-center"
                        aria-label="Send us an email"
                      >
                        <Mail size={18} />
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Mobile: Connect moved to side of Pages/Support */}
                <div className="md:hidden mb-20">
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <h3 className="f-title f_600 t_color f_size_18 text-[#263b5e] mb-4">Pages</h3>
                      <ul className="list-unstyled f_list space-y-2">
                        {mainPages.slice(0, 4).map((page, index) => (
                          <li key={index}>
                            <Link 
                              to={page.to}
                              className="text-[#6a7695] hover:text-[#E29578] transition-colors text-sm"
                            >
                              {page.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="f-title f_600 t_color f_size_18 text-[#263b5e] mb-4">Support</h3>
                      <ul className="list-unstyled f_list space-y-2">
                        {supportPages.slice(0, 4).map((page, index) => (
                          <li key={index}>
                            <Link 
                              to={page.to}
                              className="text-[#6a7695] hover:text-[#E29578] transition-colors text-sm"
                            >
                              {page.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="f-title f_600 t_color f_size_18 text-[#263b5e] mb-4">Connect</h3>
                      <p className="text-[#6a7695] text-xs mb-3">Let's stay connected</p>
                      <div className="grid grid-cols-2 gap-2">
                        <a 
                          href="https://linkedin.com/company/trivesha" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 bg-[#006D77]/10 rounded-lg text-[#006D77] hover:bg-[#0077B5] hover:text-white transition-all duration-300 flex items-center justify-center"
                          aria-label="Follow us on LinkedIn"
                        >
                          <Linkedin size={16} />
                        </a>
                        <a 
                          href="https://wa.me/917330975148" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 bg-[#006D77]/10 rounded-lg text-[#006D77] hover:bg-[#25D366] hover:text-white transition-all duration-300 flex items-center justify-center"
                          aria-label="Chat with us on WhatsApp"
                        >
                          <MessageCircle size={16} />
                        </a>
                        <a 
                          href="https://www.justdial.com/trivesha" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 bg-[#006D77]/10 rounded-lg text-[#006D77] hover:bg-[#E29578] hover:text-white transition-all duration-300 flex items-center justify-center"
                          aria-label="Find us on JustDial"
                        >
                          <span className="font-bold text-xs">JD</span>
                        </a>
                        <a 
                          href="mailto:trivesha.tech@gmail.com"
                          className="p-2 bg-[#006D77]/10 rounded-lg text-[#006D77] hover:bg-[#EA4335] hover:text-white transition-all duration-300 flex items-center justify-center"
                          aria-label="Send us an email"
                        >
                          <Mail size={16} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Keep the animated background */}
        <div className="footer_bg">
          <div className="footer_bg_one"></div>
          <div className="footer_bg_two"></div>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-7">
              <p className="mb-0 f_400 text-[#7f88a6]">© 2025 Trivesha. All rights reserved.</p>
            </div>
            <div className="col-lg-6 col-sm-5 text-right">
              <p className="text-[#7f88a6]">Made with <i className="icon_heart text-red-500"></i> in <a href="https://trivesha.tech" target="_blank" className="text-[#E29578] hover:underline">India</a></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
