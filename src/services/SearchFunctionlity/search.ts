export interface SearchItem {
  path: string;
  title: string;
  keywords: string[];
  description?: string;
  category?: string;
  priority?: number;
}

export const searchDatabase: SearchItem[] = [
  {
    path: "/",
    title: "Home",
    keywords: ["home", "main", "index", "start", "homepage"],
    description: "Main homepage",
    category: "general",
    priority: 10,
  },
  {
    path: "/about-us",
    title: "About Us",
    keywords: [
      "about",
      "us",
      "about us",
      "information",
      "who we are",
      "our story",
    ],
    description: "Learn about our institution",
    category: "about",
    priority: 9,
  },
  {
    path: "/our-management",
    title: "Our Management",
    keywords: [
      "management",
      "administration",
      "leadership",
      "team",
      "executives",
      "board",
    ],
    description: "Meet our management team",
    category: "about",
    priority: 7,
  },
  {
    path: "/chairman-desk",
    title: "Chairman's Desk",
    keywords: ["chairman", "desk", "message", "leadership", "director"],
    description: "Message from the Chairman",
    category: "about",
    priority: 6,
  },
  {
    path: "/our-history",
    title: "Our History",
    keywords: [
      "history",
      "heritage",
      "past",
      "timeline",
      "foundation",
      "established",
    ],
    description: "Our institution's history",
    category: "about",
    priority: 5,
  },
  {
    path: "/our-courses",
    title: "Our Courses",
    keywords: [
      "courses",
      "programs",
      "curriculum",
      "study",
      "academics",
      "degrees",
      "education",
    ],
    description: "Available courses and programs",
    category: "academics",
    priority: 10,
  },
  {
    path: "/academics-and-research",
    title: "Academics & Research",
    keywords: [
      "academics",
      "research",
      "education",
      "study",
      "learning",
      "academic programs",
    ],
    description: "Academic programs and research",
    category: "academics",
    priority: 9,
  },
  {
    path: "/campus-life",
    title: "Campus Life",
    keywords: [
      "campus",
      "life",
      "student life",
      "activities",
      "events",
      "facilities",
    ],
    description: "Student campus experience",
    category: "student",
    priority: 8,
  },
  {
    path: "/gallery",
    title: "Gallery",
    keywords: [
      "gallery",
      "photos",
      "images",
      "pictures",
      "campus photos",
      "events photos",
    ],
    description: "Photo gallery",
    category: "student",
    priority: 6,
  },
  {
    path: "/health-care",
    title: "Health Care",
    keywords: [
      "health",
      "care",
      "healthcare",
      "medical",
      "hospital",
      "treatment",
    ],
    description: "Healthcare services",
    category: "healthcare",
    priority: 9,
  },
  {
    path: "/dental-hospital",
    title: "Dental Hospital",
    keywords: [
      "dental",
      "hospital",
      "dentistry",
      "teeth",
      "oral health",
      "dental care",
    ],
    description: "Dental hospital services",
    category: "healthcare",
    priority: 8,
  },
  {
    path: "/medical-college",
    title: "Medical College",
    keywords: ["medical", "college", "medicine", "mbbs", "doctor", "physician"],
    description: "Medical college information",
    category: "institutions",
    priority: 9,
  },
  {
    path: "/rgc-dental-group",
    title: "RGC Dental Group",
    keywords: ["rgc dental", "dental group", "dentistry", "dental college"],
    description: "RGC Dental Group",
    category: "institutions",
    priority: 8,
  },
  {
    path: "/rgc-institute-of-technology",
    title: "RGC Institute of Technology",
    keywords: [
      "technology",
      "engineering",
      "rgc technology",
      "technical",
      "engineering college",
    ],
    description: "RGC Institute of Technology",
    category: "institutions",
    priority: 8,
  },
  {
    path: "/rgc-sanjay-gandhi-college",
    title: "RGC Sanjay Gandhi College",
    keywords: ["sanjay gandhi", "college", "rgc sanjay gandhi"],
    description: "RGC Sanjay Gandhi College",
    category: "institutions",
    priority: 7,
  },
  {
    path: "/rgc-kamala-college",
    title: "RGC Kamala College",
    keywords: ["kamala", "college", "rgc kamala"],
    description: "RGC Kamala College",
    category: "institutions",
    priority: 7,
  },
  {
    path: "/rgc-commerce",
    title: "RGC Commerce & Administration",
    keywords: [
      "commerce",
      "administration",
      "business",
      "management",
      "bcom",
      "mcom",
    ],
    description: "Commerce and Administration",
    category: "institutions",
    priority: 7,
  },
  {
    path: "/alumni-services",
    title: "Alumni Services",
    keywords: [
      "alumni",
      "graduates",
      "former students",
      "alumni network",
      "alumni services",
    ],
    description: "Services for alumni",
    category: "services",
    priority: 6,
  },
  {
    path: "/news-and-events",
    title: "News & Events",
    keywords: [
      "news",
      "events",
      "announcements",
      "updates",
      "happenings",
      "latest",
    ],
    description: "Latest news and events",
    category: "general",
    priority: 8,
  },
  {
    path: "/publications",
    title: "Publications",
    keywords: [
      "publications",
      "research papers",
      "journals",
      "articles",
      "academic papers",
    ],
    description: "Our publications",
    category: "academics",
    priority: 6,
  },
  {
    path: "/our-journal",
    title: "Our Journal",
    keywords: [
      "journal",
      "research journal",
      "academic journal",
      "publication",
    ],
    description: "Our academic journal",
    category: "academics",
    priority: 5,
  },
  {
    path: "/external-publications",
    title: "External Publications",
    keywords: [
      "external publications",
      "outside publications",
      "research papers",
    ],
    description: "External publications",
    category: "academics",
    priority: 4,
  },
  {
    path: "/research-and-grants",
    title: "Research & Grants",
    keywords: [
      "research",
      "grants",
      "funding",
      "projects",
      "academic research",
    ],
    description: "Research projects and grants",
    category: "academics",
    priority: 7,
  },
  {
    path: "/scholarship",
    title: "Scholarship",
    keywords: [
      "scholarship",
      "financial aid",
      "grants",
      "funding",
      "student aid",
    ],
    description: "Scholarship opportunities",
    category: "services",
    priority: 8,
  },
  {
    path: "/online-classes",
    title: "Online Classes",
    keywords: [
      "online",
      "classes",
      "distance learning",
      "virtual classes",
      "e-learning",
    ],
    description: "Online learning options",
    category: "academics",
    priority: 7,
  },
  {
    path: "/online-applications",
    title: "Online Applications",
    keywords: [
      "application",
      "apply",
      "admission",
      "enrollment",
      "online application",
    ],
    description: "Apply online",
    category: "services",
    priority: 9,
  },
  {
    path: "/work-for-us",
    title: "Work For Us",
    keywords: [
      "jobs",
      "careers",
      "employment",
      "work",
      "hiring",
      "recruitment",
      "vacancies",
    ],
    description: "Career opportunities",
    category: "services",
    priority: 7,
  },
  {
    path: "/reach-us",
    title: "Reach Us",
    keywords: [
      "contact",
      "reach",
      "address",
      "phone",
      "email",
      "location",
      "contact us",
    ],
    description: "Contact information",
    category: "general",
    priority: 8,
  },
  {
    path: "/community-services",
    title: "Community Services",
    keywords: [
      "community",
      "services",
      "outreach",
      "social service",
      "community work",
    ],
    description: "Community service programs",
    category: "services",
    priority: 5,
  },
  {
    path: "/satellite-services",
    title: "Satellite Services",
    keywords: ["satellite", "services", "remote services", "outreach services"],
    description: "Satellite service locations",
    category: "services",
    priority: 4,
  },
  {
    path: "/village-adoptions",
    title: "Village Adoptions",
    keywords: [
      "village",
      "adoption",
      "rural development",
      "community development",
    ],
    description: "Village adoption programs",
    category: "services",
    priority: 4,
  },
  {
    path: "/download-centre",
    title: "Download Centre",
    keywords: [
      "download",
      "downloads",
      "files",
      "documents",
      "resources",
      "forms",
    ],
    description: "Download resources",
    category: "resources",
    priority: 6,
  },
  {
    path: "/mandatory-disclosures",
    title: "Mandatory Disclosures",
    keywords: [
      "mandatory",
      "disclosures",
      "legal",
      "compliance",
      "regulations",
    ],
    description: "Mandatory disclosure documents",
    category: "resources",
    priority: 5,
  },
  {
    path: "/notice-board",
    title: "Notice Board",
    keywords: ["notice", "notices", "announcements", "board", "notifications"],
    description: "Official notices",
    category: "general",
    priority: 7,
  },
  {
    path: "/informational-pack",
    title: "Informational Pack",
    keywords: ["information", "pack", "brochure", "details", "info pack"],
    description: "Informational materials",
    category: "resources",
    priority: 5,
  },
  {
    path: "/our-policy",
    title: "Our Policies",
    keywords: ["policy", "policies", "rules", "regulations", "guidelines"],
    description: "Institutional policies",
    category: "resources",
    priority: 5,
  },
  {
    path: "/national-dental-register",
    title: "National Dental Register",
    keywords: [
      "national dental register",
      "dental register",
      "registration",
      "dental registration",
    ],
    description: "National Dental Register",
    category: "healthcare",
    priority: 6,
  },
];

export interface SearchResult extends SearchItem {
  relevanceScore: number;
  matchType: "exact" | "partial" | "keyword" | "description";
  highlightedTitle?: string;
  highlightedDescription?: string;
}

export interface SearchOptions {
  limit?: number;
  includeDescription?: boolean;
  categoryFilter?: string;
  minScore?: number;
  fuzzyMatch?: boolean;
}

export class SearchEngine {
  private static readonly MIN_QUERY_LENGTH = 1;
  private static readonly SCORES = {
    EXACT_TITLE: 1000,
    PARTIAL_TITLE_START: 800,
    PARTIAL_TITLE: 600,
    EXACT_KEYWORD: 750,
    PARTIAL_KEYWORD_START: 500,
    PARTIAL_KEYWORD: 350,
    WORD_MATCH_TITLE: 200,
    WORD_MATCH_KEYWORD: 150,
    WORD_MATCH_DESCRIPTION: 75,
    FUZZY_MATCH: 100,
    PRIORITY_MULTIPLIER: 10,
    CATEGORY_BONUS: 50,
  } as const;

  // Precomputed normalized search index for better performance
  private static searchIndex: Map<
    string,
    {
      item: SearchItem;
      normalizedTitle: string;
      normalizedKeywords: string[];
      normalizedDescription: string;
      titleWords: string[];
      keywordWords: string[];
      descriptionWords: string[];
    }
  > | null = null;

  private static buildSearchIndex(): void {
    if (this.searchIndex) return;

    this.searchIndex = new Map();

    for (const item of searchDatabase) {
      const normalizedTitle = this.normalizeText(item.title);
      const normalizedKeywords = item.keywords.map((k) =>
        this.normalizeText(k)
      );
      const normalizedDescription = this.normalizeText(item.description || "");

      this.searchIndex.set(item.path, {
        item,
        normalizedTitle,
        normalizedKeywords,
        normalizedDescription,
        titleWords: normalizedTitle.split(" ").filter((w) => w.length > 1),
        keywordWords: normalizedKeywords
          .flatMap((k) => k.split(" "))
          .filter((w) => w.length > 1),
        descriptionWords: normalizedDescription
          .split(" ")
          .filter((w) => w.length > 1),
      });
    }
  }

  private static normalizeText(text: string): string {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s&-]/g, " ")
      .replace(/\s+/g, " ")
      .replace(/^\s+|\s+$/g, "");
  }

  private static getQueryWords(query: string): string[] {
    return this.normalizeText(query)
      .split(" ")
      .filter((word) => word.length > 0);
  }

  private static calculateLevenshteinDistance(a: string, b: string): number {
    const matrix = Array(b.length + 1)
      .fill(null)
      .map(() => Array(a.length + 1).fill(null));

    for (let i = 0; i <= a.length; i++) matrix[0][i] = i;
    for (let j = 0; j <= b.length; j++) matrix[j][0] = j;

    for (let j = 1; j <= b.length; j++) {
      for (let i = 1; i <= a.length; i++) {
        const cost = a[i - 1] === b[j - 1] ? 0 : 1;
        matrix[j][i] = Math.min(
          matrix[j][i - 1] + 1,
          matrix[j - 1][i] + 1,
          matrix[j - 1][i - 1] + cost
        );
      }
    }

    return matrix[b.length][a.length];
  }

  private static isFuzzyMatch(
    query: string,
    target: string,
    threshold: number = 2
  ): boolean {
    if (Math.abs(query.length - target.length) > threshold) return false;
    return this.calculateLevenshteinDistance(query, target) <= threshold;
  }

  private static highlightText(text: string, query: string): string {
    if (!query || !text) return text;

    const regex = new RegExp(
      `(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`,
      "gi"
    );
    return text.replace(regex, "<mark>$1</mark>");
  }

  private static calculateRelevanceScore(
    query: string,
    indexEntry: any,
    options: SearchOptions = {}
  ): {
    score: number;
    matchType: SearchResult["matchType"];
  } {
    const normalizedQuery = this.normalizeText(query);
    const queryWords = this.getQueryWords(query);
    const { item, normalizedTitle, normalizedKeywords, normalizedDescription } =
      indexEntry;

    let score = 0;
    let matchType: SearchResult["matchType"] = "description";
    let hasMatch = false;

    // Priority multiplier
    if (item.priority) {
      score += item.priority * this.SCORES.PRIORITY_MULTIPLIER;
    }

    // Exact title match (highest priority)
    if (normalizedTitle === normalizedQuery) {
      score += this.SCORES.EXACT_TITLE;
      matchType = "exact";
      hasMatch = true;
    }
    // Title starts with query
    else if (normalizedTitle.startsWith(normalizedQuery)) {
      score += this.SCORES.PARTIAL_TITLE_START;
      matchType = "partial";
      hasMatch = true;
    }
    // Partial title match
    else if (normalizedTitle.includes(normalizedQuery)) {
      score += this.SCORES.PARTIAL_TITLE;
      matchType = "partial";
      hasMatch = true;
    }

    // Keyword matching
    let bestKeywordScore = 0;
    for (const keyword of normalizedKeywords) {
      let keywordScore = 0;

      if (keyword === normalizedQuery) {
        keywordScore = this.SCORES.EXACT_KEYWORD;
        if (matchType === "description") matchType = "keyword";
        hasMatch = true;
      } else if (keyword.startsWith(normalizedQuery)) {
        keywordScore = this.SCORES.PARTIAL_KEYWORD_START;
        if (matchType === "description") matchType = "keyword";
        hasMatch = true;
      } else if (keyword.includes(normalizedQuery)) {
        keywordScore = this.SCORES.PARTIAL_KEYWORD;
        if (matchType === "description") matchType = "keyword";
        hasMatch = true;
      }

      bestKeywordScore = Math.max(bestKeywordScore, keywordScore);
    }
    score += bestKeywordScore;

    // Individual word matches
    for (const word of queryWords) {
      if (word.length < 2) continue;

      // Title word matches
      if (indexEntry.titleWords.some((w: string) => w.includes(word))) {
        score += this.SCORES.WORD_MATCH_TITLE;
        hasMatch = true;
      }

      // Keyword word matches
      if (indexEntry.keywordWords.some((w: string) => w.includes(word))) {
        score += this.SCORES.WORD_MATCH_KEYWORD;
        hasMatch = true;
      }

      // Description word matches
      if (indexEntry.descriptionWords.some((w: string) => w.includes(word))) {
        score += this.SCORES.WORD_MATCH_DESCRIPTION;
        hasMatch = true;
      }
    }

    // Description match
    if (
      normalizedDescription &&
      normalizedDescription.includes(normalizedQuery)
    ) {
      score += this.SCORES.WORD_MATCH_DESCRIPTION * 2;
      hasMatch = true;
    }

    // Fuzzy matching (for typos)
    if (options.fuzzyMatch && !hasMatch) {
      const titleWords = normalizedTitle.split(" ");
      const allKeywords = normalizedKeywords.join(" ").split(" ");

      for (const word of [...titleWords, ...allKeywords]) {
        if (word.length > 3 && this.isFuzzyMatch(normalizedQuery, word)) {
          score += this.SCORES.FUZZY_MATCH;
          hasMatch = true;
          break;
        }
      }
    }

    // Category bonus if matches query
    if (
      item.category &&
      this.normalizeText(item.category).includes(normalizedQuery)
    ) {
      score += this.SCORES.CATEGORY_BONUS;
      hasMatch = true;
    }

    // Return 0 if no match found
    if (!hasMatch) {
      score = 0;
    }

    return { score, matchType };
  }

  public static search(
    query: string,
    optionsOrLimit?: SearchOptions | number
  ): SearchResult[] {
    // Build index if not exists
    this.buildSearchIndex();

    // Handle backward compatibility
    const options: SearchOptions =
      typeof optionsOrLimit === "number"
        ? { limit: optionsOrLimit }
        : optionsOrLimit || {};

    const {
      limit = 8,
      categoryFilter,
      minScore = 10,
      fuzzyMatch = true,
    } = options;

    if (!query || query.trim().length < this.MIN_QUERY_LENGTH) {
      return [];
    }

    const results: SearchResult[] = [];

    for (const [, indexEntry] of this.searchIndex!) {
      // Apply category filter
      if (categoryFilter && indexEntry.item.category !== categoryFilter) {
        continue;
      }

      const { score, matchType } = this.calculateRelevanceScore(
        query,
        indexEntry,
        { fuzzyMatch }
      );

      if (score >= minScore) {
        results.push({
          ...indexEntry.item,
          relevanceScore: score,
          matchType,
          highlightedTitle: this.highlightText(indexEntry.item.title, query),
          highlightedDescription: indexEntry.item.description
            ? this.highlightText(indexEntry.item.description, query)
            : undefined,
        });
      }
    }

    // Sort by relevance score (descending), then by priority
    results.sort((a, b) => {
      if (b.relevanceScore !== a.relevanceScore) {
        return b.relevanceScore - a.relevanceScore;
      }
      return (b.priority || 0) - (a.priority || 0);
    });

    return results.slice(0, limit);
  }

  public static getBestMatch(
    query: string,
    options?: SearchOptions
  ): SearchResult | null {
    const results = this.search(query, { ...options, limit: 1 });
    return results.length > 0 ? results[0] : null;
  }

  public static searchByCategory(
    query: string,
    category: string,
    limit: number = 5
  ): SearchResult[] {
    return this.search(query, { categoryFilter: category, limit });
  }

  public static getPopularPages(limit: number = 10): SearchItem[] {
    return searchDatabase
      .sort((a, b) => (b.priority || 0) - (a.priority || 0))
      .slice(0, limit);
  }

  public static getSuggestions(query: string, limit: number = 5): string[] {
    if (!query || query.trim().length < 1) {
      return [];
    }

    this.buildSearchIndex();

    const suggestions = new Set<string>();
    const normalizedQuery = this.normalizeText(query);

    // Collect suggestions from titles and keywords
    for (const [, indexEntry] of this.searchIndex!) {
      const { item, normalizedTitle, normalizedKeywords } = indexEntry;

      // Title suggestions
      if (
        normalizedTitle.includes(normalizedQuery) &&
        normalizedTitle !== normalizedQuery
      ) {
        suggestions.add(item.title);
      }

      // Keyword suggestions
      for (
        let i = 0;
        i < item.keywords.length && suggestions.size < limit * 2;
        i++
      ) {
        const keyword = item.keywords[i];
        const normalizedKeyword = normalizedKeywords[i];

        if (
          normalizedKeyword.includes(normalizedQuery) &&
          keyword.length > query.length &&
          !suggestions.has(keyword)
        ) {
          suggestions.add(keyword);
        }
      }

      if (suggestions.size >= limit * 2) break;
    }

    return Array.from(suggestions).slice(0, limit);
  }

  // Utility method to clear the search index (useful for testing or memory management)
  public static clearIndex(): void {
    this.searchIndex = null;
  }

  // Method to get search statistics
  public static getSearchStats(): {
    totalItems: number;
    categories: string[];
    avgPriority: number;
  } {
    const categories = [
      ...new Set(
        searchDatabase
          .map((item) => item.category)
          .filter((cat): cat is string => cat !== undefined)
      ),
    ];
    const avgPriority =
      searchDatabase.reduce((sum, item) => sum + (item.priority || 0), 0) /
      searchDatabase.length;

    return {
      totalItems: searchDatabase.length,
      categories,
      avgPriority: Math.round(avgPriority * 100) / 100,
    };
  }
}
