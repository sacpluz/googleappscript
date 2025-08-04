function createGrowthWheelForm() {
  const form = FormApp.create('Product Owner Growth Wheel')

  function addScaleQuestion(title, lowerLabel, upperLabel) {
    form.addScaleItem()
      .setTitle(title)
      .setBounds(1, 5)
      .setLabels(lowerLabel, upperLabel)
  }

function addMultipleChoiceQuestion(title, options) {
  const item = form.addMultipleChoiceItem()
  const choices = options.map(opt => item.createChoice(opt))
  item.setTitle(title).setChoices(choices)
}

  // DOMAIN KNOWLEDGE
  form.addSectionHeaderItem().setTitle('Domain Knowledge')

  addScaleQuestion(
    'How well do you apply your understanding of business models, revenue streams, and organizational goals to your product decisions?',
    'Rarely consider business context',
    'Consistently align product strategy with business goals and financial impact'
  )
  addScaleQuestion(
    'How deeply do you understand the product’s users, their workflows, and their challenges?',
    'Limited user knowledge',
    'Proactively engage and advocate for users at all stages'
  )
  addScaleQuestion(
    'How aware are you of relevant laws, standards, and requirements impacting the product?',
    'Often unaware or reactive',
    'Proactively ensure compliance and educate others'
  )
  addScaleQuestion(
    'How well do you understand the technical environment, key systems, and architectural constraints?',
    'Basic or no technical understanding',
    'Actively use technical insight to guide decisions'
  )
  addScaleQuestion(
    'How effectively do you track industry trends, competition, and emerging opportunities or threats?',
    'Rarely follow market trends',
    'Use market insights to innovate and guide product direction'
  )
  addScaleQuestion(
    'How proactively do you update and deepen your domain knowledge as the landscape evolves?',
    'Rarely seek new knowledge',
    'Constantly learning and sharing insights'
  )
  addScaleQuestion(
    'How well do you use your domain expertise to communicate clearly and persuasively with stakeholders?',
    'Struggle to communicate domain context',
    'Influence and align diverse stakeholders with expert communication'
  )

  addMultipleChoiceQuestion(
    'On a scale of 1 to 5, where 1 is Beginner and 5 is Catalyst, how would you rate your overall domain knowledge and impact based on the following descriptions?',
    [
      'I have a basic understanding of the domain and user context and often rely on experts for detailed insights',
      'I actively develop domain knowledge and use it to improve product requirements and prioritization',
      'I demonstrate deep expertise, anticipate trends, and guide strategic decisions within my organization',
      'I mentor others in domain expertise and bring in advanced market intelligence to influence product direction',
      'I shape industry standards and best practices, act as a thought leader, and influence the domain externally'
    ]
  )

  // ENGAGEMENT
  form.addSectionHeaderItem().setTitle('Engagement')

  addScaleQuestion(
    'How effectively do you seek to genuinely understand stakeholder perspectives, concerns, and motivations?',
    'Rarely listen beyond surface',
    'Deeply understand and reflect stakeholder needs regularly'
  )
  addScaleQuestion(
    'How well do you ensure diverse voices are invited and actively involved in discussions and decision-making?',
    'Engage a limited group',
    'Proactively invite and empower broad, diverse participation'
  )
  addScaleQuestion(
    'How strongly do you establish trust and rapport across individuals and groups inside and outside your team?',
    'Minimal relationship efforts',
    'Build deep, trusting partnerships consistently'
  )
  addScaleQuestion(
    'How regularly do you engage relevant stakeholders early and throughout product ideation, prioritization, and validation?',
    'Involve stakeholders only reactively',
    'Consistently engage early and often'
  )
  addScaleQuestion(
    'How well do you create enthusiasm and a sense of purpose that motivates stakeholders toward product success?',
    'Struggle to motivate others',
    'Inspire high energy and shared commitment'
  )
  addScaleQuestion(
    'How effectively do you set up and act on regular feedback loops to improve product and process?',
    'Feedback is irregular or ignored',
    'Feedback is continuous and actively drives improvement'
  )
  addScaleQuestion(
    'How skilled are you at addressing disagreements constructively and facilitating mutual understanding?',
    'Avoid or escalate conflicts',
    'Navigate and resolve conflicts to strengthen relationships'
  )

  addMultipleChoiceQuestion(
    'On a scale of 1 to 5, where 1 is Beginner and 5 is Catalyst, how would you rate your overall engagement skills and impact based on the following descriptions?',
    [
      'I initiate regular communication with stakeholders and seek feedback to clarify expectations',
      'I proactively involve stakeholders, build trust, and facilitate dialogue to resolve concerns and align teams',
      'I create and sustain strong engagement cultures, even across complex or distributed stakeholders, and resolve conflicts constructively',
      'I coach others in facilitation, collaboration, and feedback, leading advanced workshops like Design Sprints and Value Proposition sessions',
      'I cultivate a culture of engagement and co-innovation across the organization and shape community practices and partnerships externally'
    ]
  )

  // ORGANIZATIONAL DEVELOPMENT
  form.addSectionHeaderItem().setTitle('Organizational Development')

  addScaleQuestion(
    'How well do you see the organization as a system of interconnected parts, identifying patterns and leverage points that affect product success?',
    'Limited understanding of organizational interdependencies',
    'Consistently identify and influence systemic factors'
  )
  addScaleQuestion(
    'How effectively do you facilitate alignment and cooperation between teams, departments, and business units?',
    'Rarely engage beyond immediate team',
    'Actively foster broad cross-functional collaboration'
  )
  addScaleQuestion(
    'How actively do you advocate for and support organizational change initiatives that improve agility and product focus?',
    'Passive or reactive to change efforts',
    'Lead and champion meaningful organizational change'
  )
  addScaleQuestion(
    'How skilled are you at identifying and eliminating organizational barriers to delivering value?',
    'Often unaware or escalate without resolution',
    'Proactively remove impediments and streamline workflows'
  )
  addScaleQuestion(
    'To what extent do you model and promote a culture of transparency, trust, experimentation, and continuous improvement?',
    'Little influence on culture',
    'Actively shape and sustain positive cultural practices'
  )
  addScaleQuestion(
    'How well do you help align organizational vision, strategy, and structures with product and customer value?',
    'Minimal role in alignment',
    'Facilitate strong alignment across multiple levels'
  )
  addScaleQuestion(
    'How effectively do you support knowledge sharing and organizational learning across boundaries?',
    'Learning is isolated or minimal',
    'Create environments for continuous learning and collaboration'
  )

  addMultipleChoiceQuestion(
    'On a scale from 1 to 5, how would you rate your effectiveness and impact in influencing and shaping the organizational context for product success?',
    [
      'I understand the organization’s structure, culture, and processes and how they impact my product and team',
      'I collaborate with teams and departments to resolve dependencies and participate in change initiatives',
      'I proactively drive organizational development efforts, scaling agile practices and fostering cross-team collaboration',
      'I guide teams and leaders through change, scaling, and culture evolution, facilitating innovation and change leadership',
      'I champion new operating models and influence industry-wide transformation and thought leadership'
    ]
  )

  // BUSINESS DEVELOPMENT
  form.addSectionHeaderItem().setTitle('Business Development')

  addScaleQuestion(
    'How actively do you scan the market, customer needs, and technology trends to identify new business opportunities?',
    'Rarely look beyond current scope',
    'Constantly explore and identify new growth opportunities'
  )
  addScaleQuestion(
    'How well do you ensure that new initiatives align with the product vision, organizational goals, and market position?',
    'Often disconnected from strategy',
    'Consistently align initiatives with long-term goals'
  )
  addScaleQuestion(
    'How effectively do you understand and influence business models, pricing strategies, and value propositions?',
    'Limited commercial knowledge',
    'Proactively shape commercial aspects of the product'
  )
  addScaleQuestion(
    'How strong are your networks and partnerships with stakeholders, business units, and potential collaborators?',
    'Minimal external relationships',
    'Actively build and leverage broad networks'
  )
  addScaleQuestion(
    'How well do you design and conduct experiments to test new business ideas and validate strategies?',
    'Rarely experiment or validate',
    'Use data-driven experimentation to guide business decisions'
  )
  addScaleQuestion(
    'How effectively do you conduct competitor analysis and customer segmentation to inform business strategies?',
    'Limited market insight',
    'Consistently use market analysis to drive strategic decisions'
  )
  addScaleQuestion(
    'How involved are you in collaborating on product launch strategies that maximize reach and business impact?',
    'Minimal involvement',
    'Lead or heavily influence go-to-market planning'
  )

addMultipleChoiceQuestion(
  'On a scale of 1 to 5, how would you rate your overall business development skills and impact based on these levels?',
  [
    'I understand the basic business model and value proposition and am aware of market trends and commercial strategy',
    'I contribute actively to market research, competitor analysis, and collaborate on go-to-market approaches',
    'I proactively drive new business initiatives, partnerships, and lead validation of new business models',
    'Guide level can be added later if desired',
    'Catalyst level can be added later if desired'
  ]
)


  // PRODUCT MANAGEMENT
  form.addSectionHeaderItem().setTitle('Product Management')

  addScaleQuestion(
    'How well do you craft and evolve a compelling product vision and strategic roadmap?',
    'Limited involvement',
    'Own and clearly communicate vision and strategy consistently'
  )
  addScaleQuestion(
    'How effectively do you set, track, and communicate clear goals, metrics, and desired outcomes?',
    'Goals are unclear or not tracked',
    'Data-driven goal setting and transparent communication'
  )
  addScaleQuestion(
    'How deeply do you monitor customer needs, industry trends, and competitor activity to inform product decisions?',
    'Rarely monitor market context',
    'Proactively adapt strategy based on market insights'
  )
  addScaleQuestion(
    'How skillfully do you prioritize work to maximize impact, balancing short-term wins and long-term growth?',
    'Prioritization is reactive or unclear',
    'Strategic and balanced prioritization based on value'
  )
  addScaleQuestion(
    'How well do you manage and align stakeholder expectations with product goals?',
    'Stakeholders are often misaligned or unclear',
    'Consistently align and communicate effectively'
  )
  addScaleQuestion(
    'How actively do you guide the product through introduction, growth, maturity, and retirement phases?',
    'Limited lifecycle involvement',
    'Own full lifecycle stewardship and plan transitions'
  )
  addScaleQuestion(
    'How proactively do you identify risks and opportunities and act on them?',
    'Reactive or unaware of risks/opportunities',
    'Anticipate and leverage risks/opportunities strategically'
  )

  addMultipleChoiceQuestion(
    'On a scale from 1 to 5, how would you rate your overall product management capability and impact based on these levels?',
    [
      'I understand the product’s goals and participate in vision and roadmap discussions',
      'I define and communicate vision, strategy, and metrics and prioritize work based on value and data',
      'I own end-to-end product management, shaping market positioning and leading through the product lifecycle',
      'I facilitate portfolio management, lean business cases, and strategic prioritization using tools like Business Model Canvas',
      'I influence organizational strategy, business model innovation, and evangelize product thinking at executive and industry levels'
    ]
  )

  // PRODUCT DEVELOPMENT
  form.addSectionHeaderItem().setTitle('Product Development')

  addScaleQuestion(
    'How actively do you explore customer problems, needs, and opportunities through research, interviews, and experiments?',
    'Rarely involved in discovery',
    'Lead continuous discovery efforts'
  )
  addScaleQuestion(
    'How well do you translate insights into clear product concepts, features, and acceptance criteria?',
    'Minimal involvement in solution definition',
    'Consistently shape clear, actionable solutions'
  )
  addScaleQuestion(
    'How effectively do you test hypotheses and solutions early and often through prototyping, user feedback, and MVPs?',
    'Rarely validate assumptions',
    'Systematically validate with users and stakeholders'
  )
  addScaleQuestion(
    'How skillfully do you decide what to build next based on value, feasibility, and learning?',
    'Prioritization is unclear or inconsistent',
    'Prioritize strategically with clear value focus'
  )
  addScaleQuestion(
    'How well do you enable incremental delivery, learn from each release, and adapt plans accordingly?',
    'Delivery is ad hoc',
    'Foster a strong iterative, adaptive delivery culture'
  )
  addScaleQuestion(
    'How effectively do you work with development teams, designers, and stakeholders to ensure shared understanding?',
    'Limited collaboration',
    'Strong, continuous collaboration and alignment'
  )
  addScaleQuestion(
    'How actively do you leverage feedback loops to refine both product and process for better outcomes?',
    'Feedback is infrequent or ignored',
    'Lead continuous improvement cycles'
  )

  addMultipleChoiceQuestion(
    'On a scale from 1 to 5, how would you rate your ability to guide product development from concept to delivery?',
    [
      'I support basic discovery, refinement, and delivery activities, including documenting stories and acceptance criteria',
      'I lead ideation, validation, and iterative delivery, integrating regular feedback and facilitating backlog refinement',
      'I orchestrate the full discovery-to-delivery cycle, champion innovation, and optimize value flow',
      'I coach teams on discovery, lean experimentation, and hypothesis-driven development using frameworks like Value Proposition Canvas',
      'I shape product innovation practices across the organization and influence product thinking in the wider community'
    ]
  )

  // ORGANIZATION OF WORK
  form.addSectionHeaderItem().setTitle('Organization of Work')

  addScaleQuestion(
    'How effectively do you create, refine, and prioritize Product Backlog items for clarity and value?',
    'Backlog is unstructured or outdated',
    'Backlog is well-maintained, prioritized, and clear'
  )
  addScaleQuestion(
    'How well do you establish clear processes for how work moves from idea to delivery?',
    'Workflows are unclear or inconsistent',
    'Clear, optimized workflows support smooth delivery'
  )
  addScaleQuestion(
    'How skillfully do you make transparent, value-based decisions about what work gets done next?',
    'Prioritization lacks transparency or strategic basis',
    'Decisions are data-driven, transparent, and aligned with goals'
  )
  addScaleQuestion(
    'How effectively do you ensure that the team and stakeholders have visibility into plans, progress, and changes?',
    'Work status is unclear to stakeholders',
    'Communication is open, timely, and comprehensive'
  )
  addScaleQuestion(
    'How well do you manage cross-team or external dependencies to prevent bottlenecks?',
    'Dependencies cause frequent delays',
    'Proactively coordinate and resolve dependencies'
  )
  addScaleQuestion(
    'How regularly do you review and optimize work processes, tools, and ceremonies?',
    'Processes remain static despite challenges',
    'Continuous process improvements are driven and embraced'
  )
  addScaleQuestion(
    'How effectively do you balance urgent requests, strategic initiatives, and technical debt?',
    'Work is reactive and imbalanced',
    'Balance between short-term demands and long-term priorities'
  )

  addMultipleChoiceQuestion(
    'On a scale from 1 to 5, how would you rate your ability to organize and optimize the flow of work for your team and stakeholders?',
    [
      'I maintain a basic backlog and support team planning, following existing workflows',
      'I proactively refine and prioritize backlog, design workflows, coordinate dependencies, and drive improvements',
      'I strategically organize complex workstreams across teams, lead process evolution, and foster continuous improvement',
      'I coach others on optimizing work systems, flow, scaling Scrum, and introduce advanced facilitation and visualization',
      'I lead organizational agility transformations and develop frameworks for sustainable delivery at scale'
    ]
  )

  // RELATIONSHIP MANAGEMENT
  form.addSectionHeaderItem().setTitle('Relationship Management')

  addScaleQuestion(
    'How thoroughly do you identify and understand all relevant stakeholders, their interests, influence, and needs?',
    'Limited to immediate stakeholders',
    'Maintain a comprehensive, dynamic stakeholder map'
  )
  addScaleQuestion(
    'How regularly do you nurture relationships through communication, appreciation, and support?',
    'Infrequent or superficial contact',
    'Proactively maintain strong, supportive connections'
  )
  addScaleQuestion(
    'How effectively do you facilitate shared understanding and ensure stakeholders align with product goals and decisions?',
    'Misalignment or unclear goals',
    'Consistently achieve broad alignment and shared purpose'
  )
  addScaleQuestion(
    'How skilled are you at addressing misunderstandings or disagreements constructively to maintain healthy relationships?',
    'Avoid or escalate conflicts',
    'Navigate and resolve conflicts to strengthen relationships'
  )
  addScaleQuestion(
    'How well do you bridge silos and foster collaboration across organizational boundaries?',
    'Rarely connect across boundaries',
    'Actively bridge gaps and enable cross-functional cooperation'
  )
  addScaleQuestion(
    'How consistently do you demonstrate reliability, transparency, and integrity in your interactions?',
    'Trust is limited or fragile',
    'Strong trust established across networks'
  )
  addScaleQuestion(
    'How effectively do you adjust your engagement and communication as relationships and organizational dynamics evolve?',
    'Rigid or inconsistent engagement',
    'Adapt fluidly to changes and maintain strong relationships'
  )

  addMultipleChoiceQuestion(
    'On a scale of 1 to 5, how would you rate your ability to build, nurture, and manage productive working relationships across your network?',
    [
      'I identify and communicate with immediate stakeholders and understand their basic needs',
      'I map broader stakeholder networks, proactively manage connections, and facilitate alignment',
      'I strategically build complex stakeholder ecosystems and act as a trusted advisor, navigating organizational dynamics',
      'I mentor others in stakeholder mapping, negotiation, and influence; facilitate cross-functional alignment using tools like Stakeholder Maps',
      'I build and sustain strategic partnerships and shape networks of influence for organizational and ecosystem change'
    ]
  )

  // PERSONAL DEVELOPMENT
  form.addSectionHeaderItem().setTitle('Personal Development')

  addScaleQuestion(
    'How proactively do you seek new knowledge and stay open to new ideas and perspectives?',
    'Rarely pursue learning opportunities',
    'Actively seek diverse learning and adapt quickly'
  )
  addScaleQuestion(
    'How well do you set clear, actionable learning goals and track your progress?',
    'No clear goals or tracking',
    'Regularly set, pursue, and evaluate development objectives'
  )
  addScaleQuestion(
    'How effectively do you solicit, receive, and incorporate feedback from stakeholders, teams, and mentors?',
    'Avoid or ignore feedback',
    'Actively seek and use feedback to improve'
  )
  addScaleQuestion(
    'How actively do you participate in professional communities, conferences, or peer learning networks?',
    'Minimal or no community involvement',
    'Engage regularly and contribute to communities'
  )
  addScaleQuestion(
    'How much do you support others’ growth through mentoring, coaching, or knowledge sharing?',
    'No mentoring or sharing',
    'Regularly mentor and contribute knowledge widely'
  )
  addScaleQuestion(
    'How consistently do you stay up to date with developments in product management, agile, and relevant technologies?',
    'Rarely track trends',
    'Early adopter and influencer of new trends and tools'
  )
  addScaleQuestion(
    'How effectively do you experiment with new approaches and reflect on their impact in your work?',
    'Rarely try new methods or reflect',
    'Consistently innovate and learn from experience'
  )

  addMultipleChoiceQuestion(
    'On a scale of 1 to 5, how would you rate your personal development habits and impact?',
    [
      'I attend trainings, reflect on strengths/needs, and accept feedback',
      'I set and pursue development goals, seek mentoring, and engage with professional communities',
      'I design my own learning paths, share knowledge, mentor others, and adopt new trends early',
      'I mentor peers and facilitate learning communities and reflective practices',
      'I design and lead organizational learning initiatives, influence industry standards, and publish insights'
    ]
  )

  // SELF-MASTERY
  form.addSectionHeaderItem().setTitle('Self-Mastery')

  addScaleQuestion(
    'How regularly do you reflect on your motivations, values, reactions, and recognize your personal triggers and blind spots?',
    'Rarely reflect',
    'Consistently self-aware and reflective'
  )
  addScaleQuestion(
    'How well do you demonstrate empathy, self-regulation, and handle difficult emotions constructively?',
    'Struggle with emotional control',
    'Manage emotions and empathize effectively'
  )
  addScaleQuestion(
    'How effectively do you bounce back from setbacks and thrive amid uncertainty and complexity?',
    'Easily discouraged by setbacks',
    'Maintain composure and grow through challenges'
  )
  addScaleQuestion(
    'How actively do you seek feedback, experiment with new approaches, and learn from failure?',
    'Avoid feedback and new approaches',
    'Embrace learning and experimentation enthusiastically'
  )
  addScaleQuestion(
    'How consistently do you act in line with your values, demonstrate transparency, and make principled decisions?',
    'Values or ethics are inconsistent',
    'Serve as a clear ethical role model'
  )
  addScaleQuestion(
    'How well do you take ownership of your commitments, outcomes, and personal development?',
    'Often avoid accountability',
    'Fully own and drive your responsibilities'
  )
  addScaleQuestion(
    'How effectively do you manage workload, stress, and set boundaries to sustain motivation and creativity?',
    'Struggle with balance and burnout risk',
    'Maintain healthy balance and wellbeing practices'
  )

  addMultipleChoiceQuestion(
    'On a scale from 1 to 5, how would you rate your self-mastery in your role?',
    [
      'I am aware of my strengths and improvement areas, seek feedback, and manage commitments',
      'I reflect on decisions, adapt behavior from feedback, and maintain composure under pressure',
      'I model a growth mindset, support others’ growth, and sustain wellbeing and ethical leadership',
      'I coach others in self-awareness, resilience, emotional intelligence, and mentor ethical leadership',
      'I shape a culture of self-mastery, influence organizational values, and inspire mindset change at scale'
    ]
  )

  Logger.log('Form created! Edit URL: ' + form.getEditUrl())
}
