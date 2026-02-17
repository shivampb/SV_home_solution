import { Project } from './types';

export const projects: Project[] = [
  {
    id: "obsidian-penthouse",
    title: "The Obsidian Penthouse",
    location: "New York, NY",
    category: "Residential",
    completionYear: "Late 2023",
    area: "4,500 sq ft",
    description: "The Obsidian Penthouse represents a bold departure from traditional luxury. Designed for a client who collects modernist sculpture, the space itself acts as a canvas—monochromatic, textural, and deliberately understated.\n\nWe stripped the original structure back to its concrete bones, revealing the raw honesty of the building. By introducing blackened steel partitions and soft, honed basalt floors, we created a sequence of spaces that feel both expansive and intimate. The challenge was to maintain warmth within a brutalist palette; this was achieved through the strategic use of walnut joinery and bouclé textiles.",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJibnLpgsFk0eZmDjDPZP_si5W97m4wbXDWJ0Lc3-1MXxvLjhcrgvvJibuPhN0OJGUqPn63jXSBNLoneKcDAAib7LKYRDSYGt-70WOi5PG1btwEuAhQlYNgEhtAtvcKhqfp91DmAjyjqWgXrsPHnyQn_OIvL2wH6Mck0q7-Z_1jWIzEs2Xwe8MG-KV702yJ2w4-eJV4N3n0lzpXeXysJ5_9ULKq7eXhpmWmrpqlcKPyz7pCDhKgknIBfnLjFCzbU3v32tXJ0bhyls",
    details: [
        { label: "Completion", value: "Late 2023" },
        { label: "Area", value: "4,500 sq ft" },
        { label: "Scope", value: "Interior & Decor" },
        { label: "Lead Architect", value: "Elena Vance" }
    ],
    materials: [
        {
            name: "Nero Marquina",
            usage: "Kitchen Island & Vanity",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBA-aK_js4hKvXL8nK5syzID36alvNXAj4gveiM3bZB2wYGfcV-EcmEYZHvno4GQjpJE4LifSF46N1nGhgRRoX3Hc6E3cGaBwixt3Y2EtEma9WIawFGUDh5u_UBYuMki0XjyTqL8wSZ7wD_G9U47dVFP_WR-4Fne7OGEGV5FpmC1p0MwLwetOh3BA6vYwOe3uugq7NoGRUrPXMbUEMvaAgLI0ORtrLoP-AnQ7s4fq6EQZ9BBAmQabrEU8naoYsXGUaYUsfoEWfc0JQ"
        },
        {
            name: "American Walnut",
            usage: "Custom Joinery & Paneling",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbb1MoD95hlHXB_a9ipjj3i-R3lxWI98Pkr8GLzUy2XMSWU9FdOMUBtvHVbozULKgr-SnHCeOjBSDqJb7i8SbbHC5bfrE80vGt865v-6P0sWJmlpIRg23KhZ-21nzGKxroJt3UWW67IM7-7LoLb3-PMFo-ghL1GodAdMXH6SSxdDcNjmz3Sq6SmS3ukp6gI-yGv6ykZmyFy8uBto3rgPvR9lCVOTdrHZNwayXSUn6aiz-14mYcGT58jmVWF7kAwHTHQENmrL5z-8s"
        },
        {
            name: "Gunmetal Steel",
            usage: "Fixtures & Hardware",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAx-qSnbX6u9eUU57--OygvbRja-fIhjARQUwgFIb5qZl-aUY-PRHRnWgulzkc71XouNY98TqR_h_L9PCx5Eu6vrdrT42iuEMxl1EoDYdsya3RNW2w4Kicn1SO4_4gjc89errbkZrrafUKItQZSGaI9pIH9vFYFQ852VopUpkeDugHLzB4HrbiLeboq82W1pIlAqJ8tTRBgDLTAJYPJroom2XRt67ywrsGRdYduofLGpuQ5QPHHJMUuRcSNKtoVYrAE1MaUQdoCiOM"
        }
    ],
    images: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuChTOtqfEaX5zMfuHCL70tVfo267yHpI5BoSDAMJcgs908K_RG1VJ9MUklYMXwsJE8IgVmtl3t4ufBR9_wT2JopExBvyhBWlmbEyeRnWXluO8cV-Tn4oIeb2163PEIl8u9JKTQPlA28bEl4DYNVaERhLE-g9bDTWqrJPr8DThXbIrPWlDRMxwFaQEzEQRWKrxL6urdkcynJ14mrWOIrREgYLY6FqTVfo7MsOpmfXn8qgaWDy2Uq95DdQshBbvuS3gHz26V6ZKxgW7E",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAzeeR7V_fq7-r01NlO32ufyUGRlInbNR5_eu1ra1dYD127V00wxf9TzrHvS5K9LAXhdfk8CT9R-Ckorf0ImxN5DPcP07_L9glGz0xdZB6efvWh7eKPmrT4OLK-fQrB55-XBQFxby-4tK6I7HFbJ8yR9E8WnxMG0DEqwDWVeDu8i0Cs4NjxzZQrkuMteI2miCXWJkWThIA2is14fXEqJg84n_6t0B-N_EMrR7sZIU-3q8QZh5t-mAz5btuHdMyj_lVuxNXmkoBXW-Y",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDTbDl8QAyvVU-c9uYhAnVKh0UJ_oVN-WsRDJu9jqXp4pv6gjgUJlyhBY233-t-iOjK_M-3hWlye2CcauZCAIvbdvDCAE2AcuoBP0psH06m6P2W9jhCd-eQyob6mbjmsjrYIc5xcua8xFCPHZxCFPR-_GtCejI1sLtyMzXUBVHREZow1jaa2zMNazxf4dMl2XYnrqNPsJPwi2f1t1mT7DOnSGm7g6_ec4A3cnm29YW2BMWj3xObmUchHCLALeG8zWDPtJS-xE_Z-jM",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBv1qX01UrTMcBHUv2BjERqhkr0rrjAgM8innWJeV9uohaT4j9t1ZuYKUzpQK6tG1kBdsAS7b6PQTugeyVsYYloBf_hSDJ70UVVVoFZKcUR-hIjjU7LbFNcNKq5P26iK59Th6c2nszn8ZzCoo3Y1kXYf9AynbKPvyH7zvcx5iYh7FxG8BQ0P89t24u8rGedZyJX41Vkc22uD9nNqBXGL6dinZcXnOBp14XaMKHcrgeesF9HVXqW2t5P5IX94ZlF-oyixrrzLlf1418"
    ]
  },
  {
    id: "serenity-villa",
    title: "Serenity Villa",
    location: "Kyoto, Japan",
    category: "Renovation",
    completionYear: "2023",
    area: "3,200 sq ft",
    description: "A careful restoration of a traditional Kyoto townhouse, blending historic Japanese aesthetics with modern living requirements.",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAv2XTcXrL8vfB_qxGtHsROCy8fnrfnMrSsLGDAbgVeTOMR_Ki2BSzyRaxaa3q1IZb8mnQQfuNPQ1b0qRdy5xMfegQhn3Vn5Iw9b06dYGxTz5dU31U48Ip2xOPw8UjkVZHvo9ToG43iI15icz_yleOiAsHMjoe_-EuwuuXlJ1u-e0bN0e0bUX-Ix42_I4XiZnnUdx2if6lyaAjo-Fx8c3zH_9uvfnSLt6d_fVboyEPX2We2xqescGg_PJp6Pm7Grvu-k47JZNAlPKg",
    images: []
  },
  {
    id: "highland-loft",
    title: "The Highland Loft",
    location: "New York, USA",
    category: "Residential",
    completionYear: "2022",
    area: "2,800 sq ft",
    description: "An open concept loft that maximizes natural light through floor-to-ceiling fenestration.",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBa3WiUQsTgcojDtxvaWlCeWlvcpvqvp1AC-ynn8DSFKvQlueiwd6NCQTogY7f4RnjDl2JsAGkSRkYx-3MWQF64s2HhJCTrmpl5nsIVXzpkkePItLNHvaWubh-LxNga5Dit31KbeMj2yA9_BNwmfX3LgQ_TVkjcmGTMfZo_DvyNaWaxvDdGEEXQEQkjYNXVuFZMnCd88k668bcX3MALcS1c9ZEKb9yNDpPgAZiQ4fEu_JIpf3VOyFFiKv16Cr0xkLvSONDqkf6vOEY",
    images: []
  },
  {
    id: "nordic-hq",
    title: "Nordic Headquarters",
    location: "Copenhagen, DK",
    category: "Commercial",
    completionYear: "2023",
    area: "12,000 sq ft",
    description: "A sustainable office space designed to foster collaboration and well-being.",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBXW6V80coKLoYt67USM-M64nkkXwR0w3QuRdIFLz29Bi8yUEJ7ig1wh_kPuAK7GtD6FDC7dXyvyNrUGNgMk55UbNjpMAywe24ZukbdG8ounixzzKwq0nqUbfRRp36DG5PQANMorwA3zTI9IM8uLa-zEpKMp-m91LL8tdqfW-bXyvWsn2KFlghuo9wVZvuIqRXMsd4co1_LMrITN32ax4nuKXj6DyEf9cm-MTJx_aDITvxPAaDM3rH_fgvKpoe8L2CN62EJE-69EgA",
    images: []
  },
   {
    id: "helix-hq",
    title: "Helix HQ",
    location: "Stockholm, Sweden",
    category: "Commercial",
    completionYear: "2022",
    area: "8,500 sq ft",
    description: "Corporate office lounge with modern furniture.",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAhvtdDGVnUmwQFHsi-9Ew3q9yRE5DyR6WvUYfRWgUTkBp2PRblkv9wN70pGTVsw7JXFhf0i2gtA0JysdU6r0zLtLmGAouQPo8YcxMXpkzXVMUfV8xe4Bu-WlHCQAcelXumqISs0lUYMgYygGN2dqFI6Uhs7Awycqsx2j93J2WRUnCRjpYwywUfA30zOXP61HM6QJqpVTU4nYt8qB_TDrO4gsvdR9oV_bOmQM5kkEjDZDoVFcvnDJuvcyiE1fQQrouMVzKA1Gk2AsQ",
    images: []
  },
   {
    id: "vantage-point",
    title: "Vantage Point Villa",
    location: "Malibu, California",
    category: "Renovation",
    completionYear: "2023",
    area: "5,000 sq ft",
    description: "Luxury kitchen interior with marble island.",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDNoBGKnuhnrckbuj8qjiwG-T8riYM_fzzmb2rbb32V3dNPmHPVry-HMHj1isjiNGAX969Zxtny_-xeWP4iIBN1rNUv66Kcdh4wZYhJfSVziLe-bqQq2BIjaz69Sqdp5UgATlTVgi85WM-qQ2Z9nBC09e74oj9-O24RX3ANKwjFIekrkDmgC-cd1WUAi9g3eRfTe1faePqYCRkVxPw2Ug_B7jxWSwLMbkUhoPhiks59Lw45Qu2bxNEY_-BB4nYT0BZsQUKEccLdu1g",
    images: []
  },
   {
    id: "onyx-suite",
    title: "The Onyx Suite",
    location: "London, UK",
    category: "Renovation",
    completionYear: "2023",
    area: "1,200 sq ft",
    description: "Detail shot of bathroom vanity with brass fixtures.",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8YWSrq1C5SS7gviSiUvobJjwwxiamxo_xahU1ELG_Jx4reTrROWSamWJisoTtBvhErNJikmv24AWmx58_MitXckZ3TJKKNOMMh6Pno2J0Fp2IxjHjl2Nqg1eiTNW66Lw-ENBg4ojpAHFslqrrb-RzAP0h0ylh4rhCsBWMkPl8UhbAft80L24JUWGuS5TqO7B83PgWgcSXUcvBxeIamwRHiZqbPDB2T2pQSJCepr_J0HTCLWn6aNrFeKR8W6EYg0FrbKoxIoGU83c",
    images: []
  },
  {
    id: "oberon-loft",
    title: "The Oberon Loft",
    location: "Tribeca, New York",
    category: "Residential",
    completionYear: "2021",
    area: "3,000 sq ft",
    description: "Modern minimalist living room with floor to ceiling windows.",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6HBkUgwqSdBueBmInHrlzN48-OGkck_K2gBDA1vGz4lQ35NPLE18lQ8P406vSyrP_16MbSWo4nFwA3FBtIGvYdyFYgvRsYKll7H1oLFaGtUZtNJQKsioek7MgKf1cGbdo8Mxyak0GZchrn4Gc6JOLNFQujGvTiJmH3GssplxeCg6yyER_4S31CXq7xQS3RGrK-P5f8716nxoyHVux2HpQ8IbrjiYBocbfjy9UAlsnKyCHCSayJj0rsa4ybqTQLmsvz_RLm4fp8CY",
    images: []
  },
  {
    id: "sylt-showroom",
    title: "Sylt Showroom",
    location: "Berlin, Germany",
    category: "Commercial",
    completionYear: "2022",
    area: "4,000 sq ft",
    description: "Abstract architectural corner with concrete and wood details.",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwA6zdvRmL1myB51SdkHwA8CteSWSHi3h_ZWg6x7Y57XIWQLQg8Tm0anNmLG_6iO0GUBTjeUCo5sTuZh6noSEdIUKZLEX8URulL1h5QZXzDSYO6lRHIaVxW3V1psvvEPjBXauAMQa19FXmWzSa-8cnERJvqBYfTyIv-UwDubynRChg2YS0HQf_hqFAAQc2k23ioMN2lG15iHfaIldftq1HwHCw7sONDZp355mF8xpAAkw-jyPnompfJvmoyZlCruc8vv_rkSHLH8k",
    images: []
  }
];
