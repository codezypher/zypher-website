// src/pages/FreeWebsiteForm.jsx
import React, { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mvgbjvpo"; // your endpoint

export default function FreeWebsiteForm() {
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [showThanks, setShowThanks] = useState(false);

  const [form, setForm] = useState({
    ownerName: "",
    businessName: "",
    email: "",
    phone: "",
    industry: "",
    hasDomain: "no",
    currentWebsite: "",
    pagesNeeded: [],
    colorPref: "",
    brandNotes: "",
    deadline: "",
    agree: false,
    _gotcha: "" // honeypot
  });

  const pageOptions = [
    "Home","About","Services","Products","Pricing",
    "Portfolio","Blog (static)","Contact","FAQ","Testimonials","Privacy/Terms"
  ];

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "pagesNeeded") {
      const set = new Set(form.pagesNeeded);
      checked ? set.add(value) : set.delete(value);
      setForm((f) => ({ ...f, pagesNeeded: Array.from(set) }));
      return;
    }
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const validate = () => {
    if (!form.ownerName.trim()) return "Enter your name.";
    if (!form.businessName.trim()) return "Enter your business name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return "Enter a valid email.";
    if (!form.phone.trim()) return "Enter a phone number.";
    if (!form.industry.trim()) return "Enter your industry.";
    if (form.hasDomain === "yes" && !form.currentWebsite.trim())
      return "Provide your current domain/URL.";
    if (!form.pagesNeeded.length) return "Select at least one page.";
    if (!form.agree) return "You must agree to be contacted.";
    return "";
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const v = validate();
    if (v) { setError(v); return; }
    setError(""); setSending(true);

    // Build payload for Formspree
    const payload = {
      ...form,
      pagesNeeded: form.pagesNeeded.join(", "),
      _subject: "10K Promo Lead — Free Static Website",
      _replyto: form.email,
      source: "NovaScotiaAle 10K promo"
    };

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (!res.ok) throw new Error("Formspree rejected the request.");

      // Success → reset and show popup
      setForm({
        ownerName: "",
        businessName: "",
        email: "",
        phone: "",
        industry: "",
        hasDomain: "no",
        currentWebsite: "",
        pagesNeeded: [],
        colorPref: "",
        brandNotes: "",
        deadline: "",
        agree: false,
        _gotcha: ""
      });
      setShowThanks(true);
    } catch (err) {
      setError("Sorry, something went wrong. Please try again in a moment.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="container py-4">
      {/* Promo banner */}
      <div className="alert alert-warning shadow-sm">
        <strong>Special Offer:</strong> Free static website for new businesses — valid now
        until <b>Sept 18, 6:00 PM (Nova Scotia)</b>.
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-sm">
            <div className="card-body p-4">
              <h1 className="h3 mb-3">Enroll — Free Static Website (10K Promo)</h1>
              <p className="text-muted mb-4">
                Fill this form to claim your free static website by Codezypher.
                We’ll contact you shortly with next steps.
              </p>

              {error && <div className="alert alert-danger">{error}</div>}

              <form onSubmit={onSubmit} noValidate>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Your Name*</label>
                    <input className="form-control" name="ownerName" value={form.ownerName} onChange={onChange} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Business Name*</label>
                    <input className="form-control" name="businessName" value={form.businessName} onChange={onChange} />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Email*</label>
                    <input type="email" className="form-control" name="email" value={form.email} onChange={onChange} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Phone*</label>
                    <input className="form-control" name="phone" placeholder="+1 (___) ___-____" value={form.phone} onChange={onChange} />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Industry*</label>
                    <input className="form-control" name="industry" placeholder="Cafe, salon, contractor, etc." value={form.industry} onChange={onChange} />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label d-block">Do you already have a domain?</label>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="radio" name="hasDomain" id="domainNo" value="no" checked={form.hasDomain === "no"} onChange={onChange} />
                      <label className="form-check-label" htmlFor="domainNo">No</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="radio" name="hasDomain" id="domainYes" value="yes" checked={form.hasDomain === "yes"} onChange={onChange} />
                      <label className="form-check-label" htmlFor="domainYes">Yes</label>
                    </div>
                  </div>

                  {form.hasDomain === "yes" && (
                    <div className="col-12">
                      <label className="form-label">Current Domain / Website URL*</label>
                      <input type="url" className="form-control" name="currentWebsite" placeholder="https://example.com" value={form.currentWebsite} onChange={onChange} />
                    </div>
                  )}

                  <div className="col-12">
                    <label className="form-label">Pages Needed* (select all that apply)</label>
                    <div className="row">
                      {pageOptions.map((p) => (
                        <div className="col-md-6" key={p}>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="pagesNeeded"
                              id={`page-${p}`}
                              value={p}
                              checked={form.pagesNeeded.includes(p)}
                              onChange={onChange}
                            />
                            <label className="form-check-label" htmlFor={`page-${p}`}>{p}</label>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Preferred Colors / Style</label>
                    <input className="form-control" name="colorPref" placeholder="e.g., Yellow/Black, minimal" value={form.colorPref} onChange={onChange} />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Ideal Go-Live Date</label>
                    <input type="date" className="form-control" name="deadline" value={form.deadline} onChange={onChange} />
                  </div>

                  <div className="col-12">
                    <label className="form-label">Brand Notes / Brief</label>
                    <textarea className="form-control" rows="4" name="brandNotes" placeholder="Tell us about your business, goals, and what to highlight." value={form.brandNotes} onChange={onChange} />
                  </div>

                  <div className="col-12">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="agree" name="agree" checked={form.agree} onChange={onChange} />
                      <label className="form-check-label" htmlFor="agree">
                        I agree to be contacted by Codezypher about this free website offer.
                      </label>
                    </div>
                  </div>

                  {/* Honeypot to reduce spam */}
                  <input type="text" name="_gotcha" value={form._gotcha} onChange={onChange} style={{ display: "none" }} tabIndex="-1" autoComplete="off" />
                </div>

                <div className="d-flex align-items-center gap-3 mt-4">
                  <button type="submit" className="btn btn-dark px-4" disabled={sending}>
                    {sending ? "Submitting..." : "Claim Free Website"}
                  </button>
                  <span className="text-muted small">
                    Offer ends <strong>Sept 18, 06:00 PM (Nova Scotia)</strong>.
                  </span>
                </div>

                <hr className="my-4" />
                <p className="text-muted small mb-0">
                  *Static website includes front-end pages (no custom backend). Hosting/domain not included.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Thank-you Popup */}
      {showThanks && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
          style={{ background: "rgba(0,0,0,0.45)", zIndex: 1050 }}
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-3 shadow p-4" style={{ maxWidth: 520, width: "92%" }}>
            <h2 className="h4 mb-2">🎉 Thank you!</h2>
            <p className="mb-3">
              You’ve <strong>claimed the free website offer</strong>. A team member from
              <strong> Codezypher</strong> will contact you soon to gather details regarding your free website.
            </p>
            <div className="d-flex justify-content-end gap-2">
              <button className="btn btn-outline-secondary" onClick={() => setShowThanks(false)}>
                Close
              </button>
              <a className="btn btn-dark" href="/" onClick={() => setShowThanks(false)}>
                Go Home
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
