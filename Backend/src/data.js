// seed.js — standalone seed data, import into db.js to replace defaults

export const managers = [
  { id: 'm1', name: 'Jordan Hale',    email: 'jordan.hale@fieldops.com' },
  { id: 'm2', name: 'Priya Sethi',    email: 'priya.sethi@fieldops.com' },
  { id: 'm3', name: 'Marcus Webb',    email: 'marcus.webb@fieldops.com' },
];

export const technicians = [
  { id: 't1', name: 'Sam Torres',     email: 'sam.torres@fieldops.com',   phone: '0411 201 301' },
  { id: 't2', name: 'Riley Cooper',   email: 'riley.cooper@fieldops.com', phone: '0411 202 302' },
  { id: 't3', name: 'Devon Nash',     email: 'devon.nash@fieldops.com',   phone: '0411 203 303' },
  { id: 't4', name: 'Morgan Blaine',  email: 'morgan.blaine@fieldops.com',phone: '0411 204 304' },
  { id: 't5', name: 'Casey Quinn',    email: 'casey.quinn@fieldops.com',  phone: '0411 205 305' },
];

export const quotes = [
  { id: 'q01', title: 'Ducted AC Installation – Level 3',        address: '14 Regent St, Chippendale NSW 2008',       estimatedHours: 2, status: 'unscheduled' },
  { id: 'q02', title: 'Hot Water System Replacement',            address: '7 Albion Ave, Surry Hills NSW 2010',       estimatedHours: 2, status: 'unscheduled' },
  { id: 'q03', title: 'Switchboard Upgrade – 3 Phase',           address: '102 King St, Newtown NSW 2042',            estimatedHours: 2, status: 'unscheduled' },
  { id: 'q04', title: 'Gas Line Inspection & Certification',     address: '55 Enmore Rd, Enmore NSW 2042',            estimatedHours: 2, status: 'unscheduled' },
  { id: 'q05', title: 'Roof Gutter Repair & Resealing',          address: '23 Addison Rd, Marrickville NSW 2204',     estimatedHours: 2, status: 'unscheduled' },
  { id: 'q06', title: 'Split System Installation – Bedroom',     address: '88 Glebe Point Rd, Glebe NSW 2037',        estimatedHours: 2, status: 'unscheduled' },
  { id: 'q07', title: 'Underground Water Pipe Repair',           address: '31 Darling St, Balmain NSW 2041',          estimatedHours: 2, status: 'unscheduled' },
  { id: 'q08', title: 'Smoke Alarm Compliance Check',            address: '9 Victoria Rd, Rozelle NSW 2039',          estimatedHours: 2, status: 'unscheduled' },
  { id: 'q09', title: 'External Cladding Inspection',            address: '200 Harris St, Pyrmont NSW 2009',          estimatedHours: 2, status: 'unscheduled' },
  { id: 'q10', title: 'Solar Inverter Fault Diagnosis',          address: '47 Pacific Hwy, St Leonards NSW 2065',     estimatedHours: 2, status: 'unscheduled' },
  { id: 'q11', title: 'Bathroom Exhaust Fan Replacement',        address: '16 Arthur St, Leichhardt NSW 2040',        estimatedHours: 2, status: 'unscheduled' },
  { id: 'q12', title: 'Stormwater Drain Unblocking',             address: '3 Norton St, Ashfield NSW 2131',           estimatedHours: 2, status: 'unscheduled' },
  { id: 'q13', title: 'EV Charger Rough-In & Install',           address: '60 Church St, Parramatta NSW 2150',        estimatedHours: 2, status: 'unscheduled' },
  { id: 'q14', title: 'Ceiling Fan Install – Living Room',       address: '77 Lyons Rd, Drummoyne NSW 2047',          estimatedHours: 2, status: 'unscheduled' },
  { id: 'q15', title: 'Leak Detection – Kitchen Slab',           address: '5 Bland St, Ashfield NSW 2131',            estimatedHours: 2, status: 'unscheduled' },
  { id: 'q16', title: 'Pool Pump Electrical Connection',         address: '120 Burns Bay Rd, Lane Cove NSW 2066',     estimatedHours: 2, status: 'unscheduled' },
  { id: 'q17', title: 'Intercom System Replacement',             address: '38 Berry St, North Sydney NSW 2060',       estimatedHours: 2, status: 'unscheduled' },
  { id: 'q18', title: 'Data Cabling – Home Office Setup',        address: '11 Spit Rd, Mosman NSW 2088',              estimatedHours: 2, status: 'unscheduled' },
  { id: 'q19', title: 'Fire Sprinkler System Test & Tag',        address: '250 Pitt St, Sydney NSW 2000',             estimatedHours: 2, status: 'unscheduled' },
  { id: 'q20', title: 'Pressure Test – Gas Meter Upgrade',       address: '19 Bourke Rd, Alexandria NSW 2015',        estimatedHours: 2, status: 'unscheduled' },
  { id: 'q21', title: 'Security Camera Cabling & Mount',         address: '64 Anzac Parade, Kensington NSW 2033',     estimatedHours: 2, status: 'unscheduled' },
  { id: 'q22', title: 'Grease Trap Service & Compliance',        address: '8 Danks St, Waterloo NSW 2017',            estimatedHours: 2, status: 'unscheduled' },
];