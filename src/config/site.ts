// ============================================================
// SITE CONFIG — single source of truth for business details.
// Update everything here; components/pages should import from
// this file rather than hardcoding any business info.
// ============================================================

export const site = {
  name: '[Business Name]',
  tagline: 'Translation, protection and legacy planning.',
  description:
    'Professional translation & editing, financial protection, and pusaka management planning for individuals and families in Malaysia.',

  // Contact
  email: '[contact@example.com]',
  phone: '[+60 1X-XXX XXXX]',
  whatsapp: '[https://wa.me/60XXXXXXXXX]',

  // Response-time promise shown near CTAs — keep in sync with reality
  responseTimeBusinessDays: '[X]',

  // Booking — Google Calendar Appointment Scheduling
  bookingUrl: 'https://calendar.google.com/calendar/appointments/schedules/[BOOKING_SCHEDULE_ID]',

  // Enquiry form — Google Apps Script Web App deployment URL.
  // This is a public endpoint URL, not a secret; the Sheet it writes to
  // is protected server-side by the Apps Script project, not by hiding
  // this URL. Never put an API key or credential here.
  enquiryEndpoint: 'https://script.google.com/macros/s/AKfycbwdmNOCn5y_45A6TgNiVtUAJ_uYeMB_i2x4oNsmFwVYMrt9Les7MrdSAcKokS1YLyii6A/exec',

  // Socials — leave blank ('') to omit from the footer automatically
  socials: {
    facebook: '',
    instagram: '',
    linkedin: '',
  },
};

export type ServiceKey = 'translation' | 'protection' | 'pusaka';

// Central registry of the three services — nav, homepage cards, service
// pages, and RelatedArticles all read from this instead of repeating
// slugs/labels in multiple places.
export const services: Record<
  ServiceKey,
  { label: string; shortLabel: string; slug: string; articleCategory: string }
> = {
  translation: {
    label: 'Translation, Editing & Writing',
    shortLabel: 'Translation',
    slug: 'translation-editing-writing',
    articleCategory: 'translation',
  },
  protection: {
    label: 'Financial Protection Solutions',
    shortLabel: 'Protection',
    slug: 'financial-protection',
    articleCategory: 'financial-protection',
  },
  pusaka: {
    label: 'Pusaka Management Planning',
    shortLabel: 'Pusaka',
    slug: 'pusaka-management',
    articleCategory: 'pusaka',
  },
};
