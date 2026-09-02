export const MODULES = [
  {
    id: 'food-hygiene-complete',
    title: { en: "Complete Food Hygiene Training", ar: "التدريب الشامل على سلامة الغذاء" },
    description: {
      en: "This is the core mandatory training built around the food hygiene video, reinforced by these cards and a final assessment covering everything you need to know to handle food safely.",
      ar: "هذا هو التدريب الإلزامي الأساسي المبني على فيديو سلامة الغذاء، ويتم تعزيزه من خلال هذه البطاقات وتقييم ختامي يغطي كل ما تحتاج معرفته للتعامل مع الغذاء بأمان."
    },
    groupIds: ['kitchen-staff', 'front-of-house', 'delivery-drivers', 'warehouse-receiving', 'supervisors'],
    estimatedMinutes: 25,
    hasVideo: true,
    videoSrc: '/media/food-hygiene-training.mp4',
    cards: [
      {
        id: 'fhc-card-handwashing',
        title: { en: "Personal Hygiene & Handwashing", ar: "النظافة الشخصية وغسل اليدين" },
        body: {
          en: "Clean hands are your first line of defense against foodborne illness. Wash your hands with soap and warm water for at least 20 seconds before handling food, after using the restroom, and after touching your face, hair, or raw ingredients.",
          ar: "الأيدي النظيفة هي خط دفاعك الأول ضد الأمراض المنقولة بالغذاء. اغسل يديك بالصابون والماء الدافئ لمدة 20 ثانية على الأقل قبل التعامل مع الطعام، وبعد استخدام دورة المياه، وبعد لمس وجهك أو شعرك أو المكونات النيئة."
        },
        keyPoints: [
          { en: "Wash for at least 20 seconds with soap and warm water", ar: "اغسل يديك لمدة 20 ثانية على الأقل بالصابون والماء الدافئ" },
          { en: "Wash before food prep, after breaks, and after touching raw food", ar: "اغسل يديك قبل تحضير الطعام، وبعد الاستراحات، وبعد لمس الطعام النيء" },
          { en: "Cover cuts with a waterproof bandage and gloves", ar: "غطِّ الجروح بضمادة مقاومة للماء وارتدِ القفازات" }
        ]
      },
      {
        id: 'fhc-card-temperature',
        title: { en: "Temperature Control & the Danger Zone", ar: "التحكم في درجة الحرارة ومنطقة الخطر" },
        body: {
          en: "Bacteria multiply fastest between 5°C and 60°C, known as the danger zone. Keep hot food hot and cold food cold, and never leave perishable food sitting at room temperature for more than two hours.",
          ar: "تتكاثر البكتيريا بأسرع معدل بين 5 و60 درجة مئوية، وهو ما يُعرف بمنطقة الخطر. حافظ على الطعام الساخن ساخناً والبارد بارداً، ولا تترك الأطعمة القابلة للتلف في درجة حرارة الغرفة لأكثر من ساعتين."
        },
        keyPoints: [
          { en: "Danger zone is 5°C to 60°C", ar: "منطقة الخطر تمتد من 5 إلى 60 درجة مئوية" },
          { en: "Use a food thermometer to check, do not guess", ar: "استخدم مقياس حرارة الطعام للتأكد، ولا تعتمد على التخمين" },
          { en: "Two-hour rule for food left at room temperature", ar: "قاعدة الساعتين للطعام المتروك في درجة حرارة الغرفة" }
        ]
      },
      {
        id: 'fhc-card-cross-contamination',
        title: { en: "Cross-Contamination", ar: "التلوث المتبادل" },
        body: {
          en: "Cross-contamination happens when harmful bacteria transfer from one food or surface to another, often through raw meat, unwashed hands, or shared cutting boards. Keep raw and ready-to-eat foods separate at every step, from storage to prep to service.",
          ar: "يحدث التلوث المتبادل عندما تنتقل البكتيريا الضارة من طعام أو سطح إلى آخر، غالباً عبر اللحوم النيئة أو الأيدي غير المغسولة أو ألواح التقطيع المشتركة. افصل بين الأطعمة النيئة والجاهزة للأكل في كل خطوة، من التخزين إلى التحضير إلى التقديم."
        },
        keyPoints: [
          { en: "Use separate cutting boards and utensils for raw and cooked food", ar: "استخدم ألواح تقطيع وأدوات منفصلة للأطعمة النيئة والمطبوخة" },
          { en: "Store raw meat below ready-to-eat food in the fridge", ar: "خزّن اللحوم النيئة أسفل الأطعمة الجاهزة للأكل في الثلاجة" },
          { en: "Wash hands and surfaces between handling different foods", ar: "اغسل يديك والأسطح بين التعامل مع أطعمة مختلفة" }
        ]
      },
      {
        id: 'fhc-card-storage',
        title: { en: "Safe Food Storage", ar: "التخزين الآمن للأغذية" },
        body: {
          en: "Proper storage keeps food safe long before it reaches a customer. Label and date items, follow first-in-first-out rotation, and store food at the correct temperature in sealed, appropriate containers.",
          ar: "التخزين السليم يحافظ على سلامة الطعام قبل وقت طويل من وصوله إلى العميل. ضع بطاقات وتواريخ على المواد، واتبع مبدأ الوارد أولاً يصرف أولاً، وخزّن الطعام في درجة الحرارة الصحيحة وبأوعية محكمة الإغلاق ومناسبة."
        },
        keyPoints: [
          { en: "Label and date all stored food", ar: "ضع بطاقة وتاريخاً على جميع الأطعمة المخزنة" },
          { en: "Follow first-in, first-out (FIFO) rotation", ar: "اتبع مبدأ الوارد أولاً يُصرف أولاً (FIFO)" },
          { en: "Store food in sealed containers at the right temperature", ar: "خزّن الطعام في أوعية محكمة الإغلاق وبدرجة الحرارة المناسبة" }
        ]
      },
      {
        id: 'fhc-card-cleaning',
        title: { en: "Cleaning & Sanitizing", ar: "التنظيف والتعقيم" },
        body: {
          en: "Cleaning removes visible dirt, but sanitizing kills the germs you cannot see, and both steps are needed to keep surfaces truly safe. Wash, rinse, and sanitize equipment and surfaces regularly, especially between different tasks.",
          ar: "التنظيف يزيل الأوساخ الظاهرة، أما التعقيم فيقضي على الجراثيم غير المرئية، وكلتا الخطوتين ضروريتان لضمان سلامة الأسطح فعلياً. اغسل واشطف وعقّم المعدات والأسطح بانتظام، خصوصاً بين المهام المختلفة."
        },
        keyPoints: [
          { en: "Clean removes dirt; sanitize kills germs, do both", ar: "التنظيف يزيل الأوساخ، والتعقيم يقضي على الجراثيم، ويجب القيام بكلتيهما" },
          { en: "Sanitize surfaces between different food tasks", ar: "عقّم الأسطح بين المهام المختلفة المتعلقة بالطعام" },
          { en: "Let sanitizer sit for its full contact time before wiping", ar: "اترك المعقم لمدة التلامس الكاملة قبل المسح" }
        ]
      },
      {
        id: 'fhc-card-allergens',
        title: { en: "Allergen Awareness", ar: "التوعية بمسببات الحساسية" },
        body: {
          en: "Food allergies can be life-threatening, so knowing what is in every dish matters. Always check ingredients for common allergens, communicate them clearly to customers, and avoid cross-contact between allergen and allergen-free dishes.",
          ar: "قد تكون حساسية الطعام مهددة للحياة، لذا فإن معرفة محتويات كل طبق أمر بالغ الأهمية. تحقق دائماً من المكونات بحثاً عن مسببات الحساسية الشائعة، وأبلغ العملاء بها بوضوح، وتجنّب التلامس المتبادل بين الأطباق المسببة للحساسية والخالية منها."
        },
        keyPoints: [
          { en: "Know the common allergens in every dish you serve", ar: "اعرف مسببات الحساسية الشائعة في كل طبق تقدمه" },
          { en: "Communicate allergen information clearly to customers", ar: "أبلغ العملاء بمعلومات مسببات الحساسية بوضوح" },
          { en: "Prevent cross-contact between allergen and allergen-free dishes", ar: "امنع التلامس المتبادل بين الأطباق المسببة للحساسية والخالية منها" }
        ]
      }
    ],
    assessment: {
      passingScore: 70,
      questions: [
        {
          id: 'fhc-q1',
          prompt: { en: "How long should you wash your hands with soap and warm water to properly remove germs?", ar: "ما هي المدة اللازمة لغسل اليدين بالصابون والماء الدافئ للتخلص من الجراثيم بفعالية؟" },
          options: [
            { id: 'a', text: { en: "5 seconds", ar: "5 ثوانٍ" } },
            { id: 'b', text: { en: "10 seconds", ar: "10 ثوانٍ" } },
            { id: 'c', text: { en: "At least 20 seconds", ar: "20 ثانية على الأقل" } },
            { id: 'd', text: { en: "A quick rinse is enough", ar: "شطف سريع كافٍ" } }
          ],
          correctOptionId: 'c',
          explanation: { en: "At least 20 seconds is needed for soap to effectively break down and remove germs from the skin.", ar: "تحتاج 20 ثانية على الأقل حتى يتمكن الصابون من تفكيك الجراثيم وإزالتها فعلياً عن الجلد." }
        },
        {
          id: 'fhc-q2',
          prompt: { en: "When must you wash your hands before returning to food prep?", ar: "متى يجب عليك غسل يديك قبل العودة إلى تحضير الطعام؟" },
          options: [
            { id: 'a', text: { en: "After using the restroom", ar: "بعد استخدام دورة المياه" } },
            { id: 'b', text: { en: "Only if your hands look dirty", ar: "فقط إذا بدت يداك متسختين" } },
            { id: 'c', text: { en: "Once, at the start of your shift", ar: "مرة واحدة فقط في بداية الدوام" } },
            { id: 'd', text: { en: "Only after handling money for more than five minutes", ar: "فقط بعد التعامل مع النقود لأكثر من خمس دقائق" } }
          ],
          correctOptionId: 'a',
          explanation: { en: "Hands must be washed after every restroom visit regardless of appearance, since harmful bacteria are not visible.", ar: "يجب غسل اليدين بعد كل استخدام لدورة المياه بغض النظر عن مظهرهما، لأن الجراثيم غير مرئية." }
        },
        {
          id: 'fhc-q3',
          prompt: { en: "What temperature range is known as the 'danger zone' for bacterial growth?", ar: "ما هو نطاق درجة الحرارة المعروف باسم منطقة الخطر لنمو البكتيريا؟" },
          options: [
            { id: 'a', text: { en: "0°C to 5°C", ar: "من 0 إلى 5 درجات مئوية" } },
            { id: 'b', text: { en: "5°C to 60°C", ar: "من 5 إلى 60 درجة مئوية" } },
            { id: 'c', text: { en: "60°C to 100°C", ar: "من 60 إلى 100 درجة مئوية" } },
            { id: 'd', text: { en: "-18°C to 0°C", ar: "من -18 إلى 0 درجة مئوية" } }
          ],
          correctOptionId: 'b',
          explanation: { en: "Bacteria grow fastest between 5°C and 60°C, so food should not linger in that range.", ar: "تنمو البكتيريا بأسرع معدل بين 5 و60 درجة مئوية، لذلك يجب ألا يبقى الطعام في هذا النطاق لفترة طويلة." }
        },
        {
          id: 'fhc-q4',
          prompt: { en: "Why should raw meat be stored on the bottom shelf of a refrigerator?", ar: "لماذا يجب تخزين اللحوم النيئة في الرف السفلي من الثلاجة؟" },
          options: [
            { id: 'a', text: { en: "It stays colder there", ar: "لأنه أكثر برودة هناك" } },
            { id: 'b', text: { en: "To prevent juices from dripping onto ready-to-eat food", ar: "لمنع تساقط العصائر على الأطعمة الجاهزة للأكل" } },
            { id: 'c', text: { en: "It takes up less space", ar: "لأنه يوفر مساحة أكبر" } },
            { id: 'd', text: { en: "It is required by law in all cases", ar: "لأن القانون يفرض ذلك في جميع الحالات" } }
          ],
          correctOptionId: 'b',
          explanation: { en: "Storing raw meat below other foods prevents its juices from dripping down and contaminating ready-to-eat items.", ar: "يمنع تخزين اللحوم النيئة أسفل الأطعمة الأخرى تساقط عصاراتها وتلويث الأطعمة الجاهزة للأكل." }
        },
        {
          id: 'fhc-q5',
          prompt: { en: "Which practice best prevents cross-contamination during food prep?", ar: "ما هي أفضل ممارسة لمنع التلوث المتبادل أثناء تحضير الطعام؟" },
          options: [
            { id: 'a', text: { en: "Using the same cutting board for raw and cooked food after a quick rinse", ar: "استخدام نفس لوح التقطيع للنيء والمطبوخ بعد شطفه سريعاً" } },
            { id: 'b', text: { en: "Using separate cutting boards and utensils for raw and ready-to-eat food", ar: "استخدام ألواح تقطيع وأدوات منفصلة للأطعمة النيئة والجاهزة للأكل" } },
            { id: 'c', text: { en: "Washing hands only after handling raw meat", ar: "غسل اليدين فقط بعد التعامل مع اللحوم النيئة" } },
            { id: 'd', text: { en: "Storing all foods together to save space", ar: "تخزين جميع الأطعمة معاً لتوفير المساحة" } }
          ],
          correctOptionId: 'b',
          explanation: { en: "Separate cutting boards and utensils physically prevent bacteria from raw food transferring to other foods.", ar: "استخدام ألواح وأدوات منفصلة يمنع فعلياً انتقال البكتيريا من الطعام النيء إلى الأطعمة الأخرى." }
        },
        {
          id: 'fhc-q6',
          prompt: { en: "What does the FIFO ('first-in, first-out') rule help ensure?", ar: "ما الهدف من قاعدة الوارد أولاً يُصرف أولاً (FIFO)؟" },
          options: [
            { id: 'a', text: { en: "The most expensive items are used first", ar: "استخدام المواد الأغلى ثمناً أولاً" } },
            { id: 'b', text: { en: "Older stock is used before newer stock to reduce spoilage", ar: "استخدام المخزون الأقدم قبل الأحدث لتقليل التلف" } },
            { id: 'c', text: { en: "Only frozen food is rotated", ar: "تدوير الأطعمة المجمدة فقط" } },
            { id: 'd', text: { en: "Staff use whichever container is easiest to reach", ar: "استخدام أي وعاء يسهل الوصول إليه" } }
          ],
          correctOptionId: 'b',
          explanation: { en: "FIFO ensures older stock is used before it expires, reducing waste and the risk of spoilage.", ar: "تضمن قاعدة FIFO استخدام المخزون الأقدم قبل انتهاء صلاحيته، مما يقلل من الهدر ومخاطر التلف." }
        },
        {
          id: 'fhc-q7',
          prompt: { en: "What is the key difference between cleaning and sanitizing?", ar: "ما هو الفرق الأساسي بين التنظيف والتعقيم؟" },
          options: [
            { id: 'a', text: { en: "Cleaning kills germs, sanitizing removes dirt", ar: "التنظيف يقضي على الجراثيم والتعقيم يزيل الأوساخ" } },
            { id: 'b', text: { en: "Cleaning removes visible dirt, sanitizing kills unseen germs", ar: "التنظيف يزيل الأوساخ الظاهرة والتعقيم يقضي على الجراثيم غير المرئية" } },
            { id: 'c', text: { en: "They are the same process", ar: "هما نفس العملية" } },
            { id: 'd', text: { en: "Sanitizing is only needed once a day", ar: "التعقيم مطلوب مرة واحدة فقط في اليوم" } }
          ],
          correctOptionId: 'b',
          explanation: { en: "Cleaning removes visible debris while sanitizing reduces germs to safe levels, and both are required for true surface safety.", ar: "التنظيف يزيل الأوساخ المرئية بينما التعقيم يقلل الجراثيم إلى مستويات آمنة، وكلاهما ضروري لسلامة الأسطح فعلياً." }
        },
        {
          id: 'fhc-q8',
          prompt: { en: "What should you do if a customer tells you they have a food allergy?", ar: "ماذا يجب أن تفعل إذا أخبرك أحد العملاء بأنه يعاني من حساسية تجاه أحد الأطعمة؟" },
          options: [
            { id: 'a', text: { en: "Assume the standard recipe is fine", ar: "افتراض أن الوصفة القياسية مناسبة" } },
            { id: 'b', text: { en: "Check the ingredients and inform the kitchen to prevent cross-contact", ar: "التحقق من المكونات وإبلاغ المطبخ لمنع التلامس المتبادل" } },
            { id: 'c', text: { en: "Tell them to avoid your restaurant next time", ar: "إخباره بتجنب زيارة المطعم مستقبلاً" } },
            { id: 'd', text: { en: "Remove only the visible allergen from the plate", ar: "إزالة مسبب الحساسية الظاهر فقط من الطبق" } }
          ],
          correctOptionId: 'b',
          explanation: { en: "Checking ingredients and alerting the kitchen helps prevent accidental exposure and cross-contact with the allergen.", ar: "التحقق من المكونات وإبلاغ المطبخ يساعد على منع التعرض العرضي والتلامس المتبادل مع مسبب الحساسية." }
        }
      ]
    }
  },
  {
    id: 'personal-hygiene',
    title: { en: "Personal Hygiene Standards", ar: "معايير النظافة الشخصية" },
    description: {
      en: "A closer look at the personal hygiene practices every food handler must follow to keep food safe.",
      ar: "نظرة معمّقة على ممارسات النظافة الشخصية التي يجب أن يلتزم بها كل من يتعامل مع الطعام لضمان سلامته."
    },
    groupIds: ['kitchen-staff', 'front-of-house', 'delivery-drivers', 'warehouse-receiving', 'supervisors'],
    estimatedMinutes: 8,
    hasVideo: false,
    videoSrc: null,
    cards: [
      {
        id: 'ph-card-1',
        title: { en: "Proper Handwashing Technique and Timing", ar: "الطريقة الصحيحة لغسل اليدين وتوقيتها" },
        body: {
          en: "Effective handwashing removes harmful bacteria and viruses that can contaminate food. Wash with soap and warm water for at least 20 seconds, covering all surfaces of your hands, between fingers, and under nails. Wash before starting work, after using the restroom, after handling raw food, and after touching your face or hair.",
          ar: "يؤدي غسل اليدين بشكل فعّال إلى إزالة البكتيريا والفيروسات الضارة التي قد تلوّث الطعام. اغسل يديك بالصابون والماء الدافئ لمدة 20 ثانية على الأقل، بحيث تشمل جميع أسطح اليدين وما بين الأصابع وتحت الأظافر. اغسل يديك قبل بدء العمل، وبعد استخدام دورة المياه، وبعد التعامل مع الطعام النيء، وبعد لمس وجهك أو شعرك."
        },
        keyPoints: [
          { en: "Scrub for at least 20 seconds with soap and warm water", ar: "افرك يديك لمدة 20 ثانية على الأقل بالصابون والماء الدافئ" },
          { en: "Wash after breaks, restroom use, and handling raw food", ar: "اغسل يديك بعد الاستراحات، واستخدام دورة المياه، والتعامل مع الطعام النيء" },
          { en: "Dry hands with a clean towel or air dryer, never on your apron", ar: "جفّف يديك بمنشفة نظيفة أو مجفف هواء، ولا تجففهما أبداً على المئزر" }
        ]
      },
      {
        id: 'ph-card-2',
        title: { en: "Work Attire and Protective Equipment", ar: "زي العمل ومعدات الحماية الشخصية" },
        body: {
          en: "Clean, designated work clothing acts as a barrier between your body and the food you handle. A clean apron, hairnet or hat, and closed-toe non-slip shoes are required in all food handling areas. Change soiled uniforms immediately, and never use the same apron for both raw and ready-to-eat food tasks.",
          ar: "يشكّل زي العمل النظيف والمخصص حاجزاً بين جسمك والطعام الذي تتعامل معه. يُشترط ارتداء مئزر نظيف، وغطاء رأس أو شبكة للشعر، وحذاء مغلق ومانع للانزلاق في جميع مناطق التعامل مع الطعام. غيّر الزي المتسخ فوراً، ولا تستخدم المئزر نفسه لمهام الطعام النيء والطعام الجاهز للأكل في آن واحد."
        },
        keyPoints: [
          { en: "Wear a clean uniform and apron dedicated to work only", ar: "ارتدِ زياً ومئزراً نظيفين مخصصين للعمل فقط" },
          { en: "Cover hair completely with a net or hat", ar: "غطِّ شعرك بالكامل بشبكة أو غطاء رأس" },
          { en: "Use separate aprons or gloves for raw and ready-to-eat food", ar: "استخدم مآزر أو قفازات منفصلة للطعام النيء والطعام الجاهز للأكل" }
        ]
      },
      {
        id: 'ph-card-3',
        title: { en: "Illness and Exclusion-from-Work Policy", ar: "سياسة الإبلاغ عن المرض والاستبعاد عن العمل" },
        body: {
          en: "Certain illnesses spread easily through food, so staff must report symptoms before starting a shift. Report vomiting, diarrhea, fever, jaundice, or infected wounds to your supervisor immediately, since you may be excluded from food handling duties until cleared. Never handle food while feeling unwell without informing management first.",
          ar: "تنتقل بعض الأمراض بسهولة عبر الطعام، لذا يجب على الموظفين الإبلاغ عن أي أعراض قبل بدء المناوبة. أبلغ المشرف فوراً في حال الإصابة بالقيء أو الإسهال أو الحمى أو اليرقان أو وجود جروح ملتهبة، إذ قد يُستبعد الموظف مؤقتاً عن التعامل مع الطعام حتى تزول الأعراض. لا تتعامل مع الطعام أبداً وأنت تشعر بتوعك دون إبلاغ الإدارة أولاً."
        },
        keyPoints: [
          { en: "Report vomiting, diarrhea, fever, or jaundice before your shift", ar: "أبلغ عن القيء أو الإسهال أو الحمى أو اليرقان قبل بدء المناوبة" },
          { en: "Cover infected cuts with a waterproof, brightly colored bandage", ar: "غطِّ الجروح الملتهبة بضمادة مقاومة للماء وبلون فاقع" },
          { en: "Exclusion protects customers and coworkers from illness", ar: "الاستبعاد المؤقت يحمي الزبائن وزملاء العمل من انتقال المرض" }
        ]
      },
      {
        id: 'ph-card-4',
        title: { en: "Jewelry, Nails, and Hair Grooming Standards", ar: "معايير المجوهرات والأظافر والعناية بالشعر" },
        body: {
          en: "Jewelry, false nails, and nail polish can harbor bacteria or fall into food, creating both physical and biological hazards. Remove rings, bracelets, and watches before handling food, except for a plain wedding band where policy allows. Keep nails short, clean, and unpolished, and tie back or fully cover long hair.",
          ar: "قد تحتضن المجوهرات والأظافر الصناعية وطلاء الأظافر البكتيريا أو تسقط في الطعام، مما يشكّل خطراً فيزيائياً وبيولوجياً معاً. انزع الخواتم والأساور والساعات قبل التعامل مع الطعام، باستثناء خاتم الزواج البسيط إن سمحت به السياسة. حافظ على أظافر قصيرة ونظيفة وخالية من الطلاء، واربط الشعر الطويل أو غطّه بالكامل."
        },
        keyPoints: [
          { en: "Remove jewelry except a plain band, per policy", ar: "انزع المجوهرات باستثناء الخاتم البسيط، وفقاً للسياسة المعتمدة" },
          { en: "Keep nails short, clean, and free of polish or false nails", ar: "حافظ على أظافر قصيرة ونظيفة وخالية من الطلاء أو الأظافر الصناعية" },
          { en: "Tie back or net long hair to prevent contamination", ar: "اربط الشعر الطويل أو غطِّه بشبكة لمنع تلوث الطعام" }
        ]
      }
    ],
    assessment: {
      passingScore: 70,
      questions: [
        {
          id: 'ph-q1',
          prompt: { en: "How long should you scrub your hands with soap during proper handwashing?", ar: "ما هي المدة المطلوبة لفرك اليدين بالصابون أثناء الغسل الصحيح؟" },
          options: [
            { id: 'a', text: { en: "At least 5 seconds", ar: "5 ثوانٍ على الأقل" } },
            { id: 'b', text: { en: "At least 20 seconds", ar: "20 ثانية على الأقل" } },
            { id: 'c', text: { en: "Only until visible dirt is gone", ar: "فقط حتى يختفي الاتساخ الظاهر" } },
            { id: 'd', text: { en: "A quick rinse without soap is enough", ar: "الشطف السريع دون صابون كافٍ" } }
          ],
          correctOptionId: 'b',
          explanation: { en: "Scrubbing for at least 20 seconds gives the soap enough contact time to break down grease and remove harmful microorganisms.", ar: "يمنح الفرك لمدة 20 ثانية على الأقل الصابون الوقت الكافي لإذابة الدهون وإزالة الكائنات الدقيقة الضارة." }
        },
        {
          id: 'ph-q2',
          prompt: { en: "Which of the following is a required time to wash your hands?", ar: "أي مما يلي يُعد وقتاً إلزامياً لغسل اليدين؟" },
          options: [
            { id: 'a', text: { en: "Only at the start of the shift", ar: "فقط عند بدء المناوبة" } },
            { id: 'b', text: { en: "After handling raw food and before touching ready-to-eat items", ar: "بعد التعامل مع الطعام النيء وقبل لمس الأصناف الجاهزة للأكل" } },
            { id: 'c', text: { en: "Only when hands look visibly dirty", ar: "فقط عندما تبدو اليدان متسختين بوضوح" } },
            { id: 'd', text: { en: "Once every two hours regardless of tasks", ar: "مرة كل ساعتين بغض النظر عن المهام" } }
          ],
          correctOptionId: 'b',
          explanation: { en: "Switching from raw to ready-to-eat food without washing hands can transfer harmful bacteria directly onto food that will not be cooked further.", ar: "الانتقال من الطعام النيء إلى الطعام الجاهز للأكل دون غسل اليدين قد ينقل البكتيريا الضارة مباشرة إلى طعام لن يخضع لطهي إضافي." }
        },
        {
          id: 'ph-q3',
          prompt: { en: "Why should you use separate aprons for raw and ready-to-eat food tasks?", ar: "لماذا يجب استخدام مآزر منفصلة لمهام الطعام النيء والطعام الجاهز للأكل؟" },
          options: [
            { id: 'a', text: { en: "To match the color scheme of the kitchen", ar: "لمطابقة نظام الألوان في المطبخ" } },
            { id: 'b', text: { en: "To prevent cross-contamination between raw and ready-to-eat food", ar: "لمنع التلوث المتبادل بين الطعام النيء والطعام الجاهز للأكل" } },
            { id: 'c', text: { en: "Because aprons wear out faster with raw food", ar: "لأن المآزر تتلف بشكل أسرع عند استخدامها مع الطعام النيء" } },
            { id: 'd', text: { en: "It is not necessary if hands are washed", ar: "الأمر غير ضروري إذا تم غسل اليدين" } }
          ],
          correctOptionId: 'b',
          explanation: { en: "An apron used with raw food can carry harmful bacteria that transfer to ready-to-eat food on contact, so separate aprons prevent this cross-contamination.", ar: "قد يحمل المئزر المستخدم مع الطعام النيء بكتيريا ضارة تنتقل إلى الطعام الجاهز للأكل عند الملامسة، لذا يمنع استخدام مآزر منفصلة هذا التلوث المتبادل." }
        },
        {
          id: 'ph-q4',
          prompt: { en: "You wake up with diarrhea before your shift. What should you do?", ar: "استيقظت وأنت تعاني من الإسهال قبل مناوبتك، فماذا يجب أن تفعل؟" },
          options: [
            { id: 'a', text: { en: "Come to work as normal since it's not contagious", ar: "الذهاب إلى العمل كالمعتاد لأن الحالة غير معدية" } },
            { id: 'b', text: { en: "Take medicine and start your shift immediately", ar: "تناول دواء والبدء بالمناوبة فوراً" } },
            { id: 'c', text: { en: "Report your symptoms to your supervisor before starting work", ar: "إبلاغ المشرف بالأعراض قبل بدء العمل" } },
            { id: 'd', text: { en: "Wait until your break to mention it", ar: "الانتظار حتى وقت الاستراحة لإخبار أحد بالأمر" } }
          ],
          correctOptionId: 'c',
          explanation: { en: "Diarrhea can spread illness through food, so it must be reported before a shift begins so a supervisor can decide on exclusion from food handling duties.", ar: "يمكن أن ينقل الإسهال المرض عبر الطعام، لذا يجب الإبلاغ عنه قبل بدء المناوبة حتى يقرر المشرف استبعاد الموظف مؤقتاً عن التعامل مع الطعام." }
        },
        {
          id: 'ph-q5',
          prompt: { en: "Which grooming practice is acceptable in a food handling area?", ar: "أي من ممارسات العناية الشخصية التالية مقبولة في منطقة التعامل مع الطعام؟" },
          options: [
            { id: 'a', text: { en: "Wearing false nails with polish for special events", ar: "ارتداء أظافر صناعية مطلية بمناسبة خاصة" } },
            { id: 'b', text: { en: "Wearing multiple rings and bracelets", ar: "ارتداء عدة خواتم وأساور" } },
            { id: 'c', text: { en: "Keeping nails short, clean, and unpolished", ar: "الحفاظ على أظافر قصيرة ونظيفة وغير مطلية" } },
            { id: 'd', text: { en: "Leaving long hair loose and uncovered", ar: "ترك الشعر الطويل مسترسلاً وغير مغطى" } }
          ],
          correctOptionId: 'c',
          explanation: { en: "Short, clean, unpolished nails reduce the risk of harboring bacteria or shedding fragments into food, unlike jewelry, false nails, or loose hair.", ar: "تقلل الأظافر القصيرة والنظيفة وغير المطلية من خطر احتضان البكتيريا أو سقوط أجزاء منها في الطعام، بخلاف المجوهرات أو الأظافر الصناعية أو الشعر المسترسل." }
        }
      ]
    }
  },
  {
    id: 'temperature-control',
    title: {
      en: "Temperature & Cold Chain",
      ar: "التحكم في الحرارة وسلسلة التبريد"
    },
    description: {
      en: "A closer look at how time and temperature control keep food safe, from receiving and storage through cooling, reheating, and transport.",
      ar: "نظرة أعمق على دور التحكم في الوقت والحرارة في الحفاظ على سلامة الأغذية، بدءاً من الاستلام والتخزين وصولاً إلى التبريد وإعادة التسخين والنقل."
    },
    groupIds: ['kitchen-staff', 'warehouse-receiving', 'delivery-drivers', 'supervisors'],
    estimatedMinutes: 8,
    hasVideo: false,
    videoSrc: null,
    cards: [
      {
        id: 'tc-card-1',
        title: {
          en: "The Danger Zone",
          ar: "منطقة الخطر الحرارية"
        },
        body: {
          en: "Bacteria multiply fastest between 5°C and 60°C, known as the temperature danger zone. Food should spend as little time as possible in this range during storage, prep, or holding.",
          ar: "تتكاثر البكتيريا بأسرع معدل بين 5 و60 درجة مئوية، وهو ما يُعرف بمنطقة الخطر الحرارية. لذا يجب ألا يبقى الطعام في هذا النطاق إلا لأقصر وقت ممكن أثناء التخزين أو التحضير أو الحفظ الساخن."
        },
        keyPoints: [
          { en: "Danger zone: 5°C to 60°C", ar: "منطقة الخطر: من 5 إلى 60 درجة مئوية" },
          { en: "Limit total time in this range to under 4 hours", ar: "يجب ألا تتجاوز مدة التعرض لهذا النطاق 4 ساعات إجمالاً" },
          { en: "Keep hot food hot and cold food cold", ar: "حافظ على سخونة الطعام الساخن وبرودة الطعام البارد" }
        ]
      },
      {
        id: 'tc-card-2',
        title: {
          en: "Cooling and Reheating Safely",
          ar: "التبريد وإعادة التسخين بأمان"
        },
        body: {
          en: "Cooked food that will be stored must be cooled quickly, from 60°C to below 5°C within about 6 hours, using shallow containers or ice baths. When reheating, food must reach at least 75°C throughout before serving.",
          ar: "يجب تبريد الطعام المطبوخ المُعدّ للتخزين بسرعة، من 60 درجة مئوية إلى أقل من 5 درجات خلال نحو 6 ساعات، وذلك باستخدام أوعية ضحلة أو حمامات جليدية. أما عند إعادة التسخين، فيجب أن تصل درجة حرارة الطعام إلى 75 درجة مئوية على الأقل في جميع أجزائه قبل التقديم."
        },
        keyPoints: [
          { en: "Cool from 60°C to below 5°C within 6 hours", ar: "برّد من 60 درجة إلى أقل من 5 درجات خلال 6 ساعات" },
          { en: "Use shallow containers to speed cooling", ar: "استخدم أوعية ضحلة لتسريع عملية التبريد" },
          { en: "Reheat to at least 75°C before serving", ar: "أعد التسخين إلى 75 درجة مئوية على الأقل قبل التقديم" }
        ]
      },
      {
        id: 'tc-card-3',
        title: {
          en: "Receiving and Transport Checks",
          ar: "فحوصات الاستلام والنقل"
        },
        body: {
          en: "Chilled deliveries should arrive at 5°C or below, and frozen deliveries at -18°C or below; check the temperature of vehicles and products at every delivery. Refrigerated trucks must be pre-cooled and doors kept closed as much as possible during transport.",
          ar: "يجب أن تصل الشحنات المبردة بدرجة حرارة 5 درجات مئوية أو أقل، والشحنات المجمدة بدرجة -18 درجة مئوية أو أقل، مع التحقق من درجة حرارة المركبة والمنتجات عند كل عملية تسليم. كما يجب تبريد الشاحنات المبردة مسبقاً وإبقاء أبوابها مغلقة قدر الإمكان أثناء النقل."
        },
        keyPoints: [
          { en: "Chilled goods: 5°C or below on arrival", ar: "البضائع المبردة: 5 درجات مئوية أو أقل عند الوصول" },
          { en: "Frozen goods: -18°C or below on arrival", ar: "البضائع المجمدة: -18 درجة مئوية أو أقل عند الوصول" },
          { en: "Reject deliveries outside safe range", ar: "ارفض استلام أي شحنة خارج النطاق الآمن" }
        ]
      },
      {
        id: 'tc-card-4',
        title: {
          en: "Using and Calibrating a Thermometer",
          ar: "استخدام ميزان الحرارة ومعايرته"
        },
        body: {
          en: "A food thermometer probe should be cleaned and sanitized between uses to avoid cross-contamination, and inserted into the thickest part of the food away from bone. Thermometers should be checked regularly against a known reference, such as ice water at 0°C, to confirm they read accurately.",
          ar: "يجب تنظيف وتعقيم مسبار ميزان الحرارة بين كل استخدام وآخر لتجنب التلوث المتبادل، وإدخاله في أسمك جزء من الطعام بعيداً عن العظم. كما ينبغي فحص الميزان بانتظام مقارنة بمرجع معروف، مثل الماء المثلج عند درجة الصفر، للتأكد من دقة قراءاته."
        },
        keyPoints: [
          { en: "Sanitize the probe before and after each use", ar: "عقّم المسبار قبل كل استخدام وبعده" },
          { en: "Insert into the thickest part, away from bone", ar: "أدخله في أسمك جزء من الطعام بعيداً عن العظم" },
          { en: "Calibrate regularly using ice water at 0°C", ar: "عايره بانتظام باستخدام الماء المثلج عند درجة الصفر" }
        ]
      }
    ],
    assessment: {
      passingScore: 70,
      questions: [
        {
          id: 'tc-q1',
          prompt: {
            en: "What is the temperature danger zone in which bacteria multiply fastest?",
            ar: "ما هي منطقة الخطر الحرارية التي تتكاثر فيها البكتيريا بأسرع معدل؟"
          },
          options: [
            { id: 'a', text: { en: "0°C to 5°C", ar: "من 0 إلى 5 درجات مئوية" } },
            { id: 'b', text: { en: "5°C to 60°C", ar: "من 5 إلى 60 درجة مئوية" } },
            { id: 'c', text: { en: "60°C to 100°C", ar: "من 60 إلى 100 درجة مئوية" } },
            { id: 'd', text: { en: "-18°C to 0°C", ar: "من -18 إلى 0 درجة مئوية" } }
          ],
          correctOptionId: 'b',
          explanation: {
            en: "Bacteria grow fastest between 5°C and 60°C, so food should spend minimal time in this range.",
            ar: "تنمو البكتيريا بأسرع معدل بين 5 و60 درجة مئوية، لذا يجب ألا يبقى الطعام في هذا النطاق إلا لأقصر وقت ممكن."
          }
        },
        {
          id: 'tc-q2',
          prompt: {
            en: "Within how many hours should cooked food be cooled from 60°C to below 5°C?",
            ar: "خلال كم ساعة يجب تبريد الطعام المطبوخ من 60 درجة مئوية إلى أقل من 5 درجات؟"
          },
          options: [
            { id: 'a', text: { en: "About 1 hour", ar: "نحو ساعة واحدة" } },
            { id: 'b', text: { en: "About 6 hours", ar: "نحو 6 ساعات" } },
            { id: 'c', text: { en: "About 12 hours", ar: "نحو 12 ساعة" } },
            { id: 'd', text: { en: "About 24 hours", ar: "نحو 24 ساعة" } }
          ],
          correctOptionId: 'b',
          explanation: {
            en: "Food should be cooled quickly, within about 6 hours, to limit the time it spends in the danger zone.",
            ar: "يجب تبريد الطعام بسرعة، خلال نحو 6 ساعات، للحد من الوقت الذي يقضيه في منطقة الخطر الحرارية."
          }
        },
        {
          id: 'tc-q3',
          prompt: {
            en: "To what minimum temperature should reheated food reach throughout before serving?",
            ar: "ما هي درجة الحرارة الدنيا التي يجب أن يصل إليها الطعام المُعاد تسخينه في جميع أجزائه قبل التقديم؟"
          },
          options: [
            { id: 'a', text: { en: "40°C", ar: "40 درجة مئوية" } },
            { id: 'b', text: { en: "55°C", ar: "55 درجة مئوية" } },
            { id: 'c', text: { en: "75°C", ar: "75 درجة مئوية" } },
            { id: 'd', text: { en: "90°C", ar: "90 درجة مئوية" } }
          ],
          correctOptionId: 'c',
          explanation: {
            en: "Reheated food must reach at least 75°C throughout to ensure any bacteria present are destroyed.",
            ar: "يجب أن يصل الطعام المُعاد تسخينه إلى 75 درجة مئوية على الأقل في جميع أجزائه لضمان القضاء على أي بكتيريا موجودة."
          }
        },
        {
          id: 'tc-q4',
          prompt: {
            en: "A frozen delivery arrives at -5°C. What should the receiver do?",
            ar: "وصلت شحنة مجمدة بدرجة حرارة -5 درجات مئوية. ماذا يجب أن يفعل المستلم؟"
          },
          options: [
            { id: 'a', text: { en: "Accept it since it is still below 0°C", ar: "قبولها لأنها ما زالت أقل من صفر درجة" } },
            { id: 'b', text: { en: "Reject the delivery as it is outside the safe frozen range", ar: "رفض الشحنة لأنها خارج النطاق الآمن للمنتجات المجمدة" } },
            { id: 'c', text: { en: "Refreeze it slowly overnight", ar: "إعادة تجميدها ببطء طوال الليل" } },
            { id: 'd', text: { en: "Store it in the chiller instead", ar: "تخزينها في الثلاجة المبردة بدلاً من ذلك" } }
          ],
          correctOptionId: 'b',
          explanation: {
            en: "Frozen deliveries should arrive at -18°C or below; -5°C is outside the safe range and the delivery should be rejected.",
            ar: "يجب أن تصل الشحنات المجمدة بدرجة -18 درجة مئوية أو أقل؛ ودرجة -5 خارج النطاق الآمن، لذا يجب رفض الشحنة."
          }
        },
        {
          id: 'tc-q5',
          prompt: {
            en: "How should a food thermometer be checked for accuracy?",
            ar: "كيف يجب التحقق من دقة ميزان الحرارة الخاص بالأغذية؟"
          },
          options: [
            { id: 'a', text: { en: "By comparing it to another staff member's guess", ar: "بمقارنته بتخمين أحد الزملاء" } },
            { id: 'b', text: { en: "By calibrating it against a known reference like ice water at 0°C", ar: "بمعايرته مقارنة بمرجع معروف مثل الماء المثلج عند درجة الصفر" } },
            { id: 'c', text: { en: "By using it only once and then discarding it", ar: "باستخدامه مرة واحدة فقط ثم التخلص منه" } },
            { id: 'd', text: { en: "By checking the manufacturer's box date", ar: "بالتحقق من تاريخ الصنع على علبة الجهاز" } }
          ],
          correctOptionId: 'b',
          explanation: {
            en: "Regular calibration against a known reference point, such as 0°C ice water, confirms the thermometer is reading accurately.",
            ar: "تؤكد المعايرة المنتظمة مقارنة بنقطة مرجعية معروفة، مثل الماء المثلج عند درجة الصفر، أن الميزان يعطي قراءات دقيقة."
          }
        }
      ]
    }
  },
  {
    id: 'cross-contamination',
    title: { en: "Preventing Cross-Contamination", ar: "منع التلوث المتبادل" },
    description: { en: "Practical techniques for keeping raw and ready-to-eat foods, tools, and surfaces separate throughout daily kitchen operations.", ar: "تقنيات عملية للفصل بين الأطعمة النيئة والجاهزة للأكل، وكذلك الأدوات والأسطح، طوال سير العمل اليومي في المطبخ." },
    groupIds: ['kitchen-staff', 'warehouse-receiving', 'supervisors'],
    estimatedMinutes: 8,
    hasVideo: false,
    videoSrc: null,
    cards: [
      {
        id: 'cc-card-1',
        title: { en: "Keep Raw and Ready-to-Eat Foods Apart", ar: "افصل الأطعمة النيئة عن الأطعمة الجاهزة للأكل" },
        body: {
          en: "Raw meat, poultry, and seafood carry bacteria that ready-to-eat foods have no cooking step left to destroy. Store, prepare, and display them separately so juices and drips never reach salads, bread, or cooked dishes.",
          ar: "تحمل اللحوم والدواجن والمأكولات البحرية النيئة بكتيريا لا توجد خطوة طهي لاحقة للأطعمة الجاهزة للأكل يمكنها القضاء عليها. لذا يجب تخزين هذه الأطعمة وتحضيرها وعرضها بشكل منفصل حتى لا تصل العصارة أو القطرات إلى السلطات أو الخبز أو الأطباق المطهوة."
        },
        keyPoints: [
          { en: "Use separate prep areas or times for raw and ready-to-eat food", ar: "استخدم مناطق أو أوقات تحضير منفصلة للأطعمة النيئة والجاهزة للأكل" },
          { en: "Never let raw meat juices drip onto other foods", ar: "لا تسمح أبدًا بتقاطر عصارة اللحوم النيئة على أطعمة أخرى" },
          { en: "Wash hands and change gloves between handling each type", ar: "اغسل يديك وغيّر القفازات عند الانتقال من التعامل مع نوع إلى آخر" }
        ]
      },
      {
        id: 'cc-card-2',
        title: { en: "Color-Coded Boards and Utensils", ar: "الألواح والأدوات المرمّزة بالألوان" },
        body: {
          en: "Many kitchens assign a color to each food type, for example red for raw meat and green for salad, so staff always grab the right board or knife. Using the wrong color, even briefly, can transfer bacteria straight into food that will not be cooked again.",
          ar: "تخصص العديد من المطابخ لونًا معينًا لكل نوع من الأطعمة، مثل اللون الأحمر للحوم النيئة والأخضر للسلطات، ليتمكن الموظفون دائمًا من استخدام اللوح أو السكين الصحيح. واستخدام اللون الخاطئ، ولو للحظة واحدة، قد ينقل البكتيريا مباشرة إلى طعام لن يُطهى مرة أخرى."
        },
        keyPoints: [
          { en: "Check the color-coding chart for your facility before you start", ar: "راجع مخطط الترميز اللوني الخاص بمنشأتك قبل بدء العمل" },
          { en: "Never swap boards or knives between food types mid-task", ar: "لا تُبدّل الألواح أو السكاكين بين أنواع الأطعمة أثناء أداء المهمة" },
          { en: "Wash and sanitize equipment before it is used for a different color group", ar: "اغسل المعدات وطهّرها قبل استخدامها لمجموعة لونية مختلفة" }
        ]
      },
      {
        id: 'cc-card-3',
        title: { en: "Storage Order Inside the Fridge", ar: "ترتيب التخزين داخل الثلاجة" },
        body: {
          en: "Store ready-to-eat food on the top shelves and raw meat, poultry, and seafood on the bottom, each in a covered, leak-proof container. This order stops raw juices from ever dripping down onto food that will be eaten without further cooking.",
          ar: "خزّن الأطعمة الجاهزة للأكل على الأرفف العلوية، بينما تُوضع اللحوم والدواجن والمأكولات البحرية النيئة على الرف السفلي، وكل منها في وعاء مغطى وغير قابل للتسرب. يمنع هذا الترتيب تقاطر عصارة الأطعمة النيئة إلى الأسفل على طعام سيُؤكل دون طهي إضافي."
        },
        keyPoints: [
          { en: "Ready-to-eat food goes on top shelves, raw food on the bottom", ar: "الأطعمة الجاهزة للأكل على الأرفف العلوية، والأطعمة النيئة على الرف السفلي" },
          { en: "Use covered, leak-proof containers for every item", ar: "استخدم أوعية مغطاة وغير قابلة للتسرب لكل صنف" },
          { en: "Check containers regularly for leaks or spills", ar: "افحص الأوعية بانتظام للتأكد من عدم وجود تسرب أو انسكاب" }
        ]
      },
      {
        id: 'cc-card-4',
        title: { en: "Clean and Sanitize Between Tasks", ar: "نظّف وطهّر بين المهام" },
        body: {
          en: "Surfaces, utensils, and hands must be cleaned and sanitized every time you switch from one food type or task to another, not just at the end of a shift. A quick wipe with a dirty cloth spreads bacteria instead of removing it.",
          ar: "يجب تنظيف الأسطح والأدوات واليدين وتطهيرها في كل مرة تنتقل فيها من نوع طعام أو مهمة إلى أخرى، وليس فقط في نهاية الدوام. فالمسح السريع بقطعة قماش متسخة ينشر البكتيريا بدلاً من إزالتها."
        },
        keyPoints: [
          { en: "Clean, then sanitize - both steps are needed", ar: "نظّف ثم طهّر، فكلتا الخطوتين ضروريتان" },
          { en: "Use a fresh cloth or sanitizer wipe for each task", ar: "استخدم قطعة قماش أو منديلًا مطهرًا جديدًا لكل مهمة" },
          { en: "Sanitize between raw and ready-to-eat tasks even on the same board", ar: "طهّر السطح بين مهام الأطعمة النيئة والجاهزة للأكل حتى لو كان اللوح نفسه" }
        ]
      }
    ],
    assessment: {
      passingScore: 70,
      questions: [
        {
          id: 'cc-q1',
          prompt: { en: "Why should raw meat be stored below ready-to-eat food in a fridge?", ar: "لماذا يجب تخزين اللحوم النيئة أسفل الأطعمة الجاهزة للأكل في الثلاجة؟" },
          options: [
            { id: 'a', text: { en: "To save space in the fridge", ar: "لتوفير المساحة في الثلاجة" } },
            { id: 'b', text: { en: "To prevent raw juices from dripping onto ready-to-eat food", ar: "لمنع تقاطر عصارة اللحوم النيئة على الأطعمة الجاهزة للأكل" } },
            { id: 'c', text: { en: "Because the bottom shelf is colder", ar: "لأن الرف السفلي أكثر برودة" } },
            { id: 'd', text: { en: "Because it is easier to reach", ar: "لأنه أسهل في الوصول إليه" } }
          ],
          correctOptionId: 'b',
          explanation: { en: "Placing raw food below ready-to-eat food ensures that any drips or spills fall away from food that will not be cooked again.", ar: "وضع الأطعمة النيئة في الأسفل يضمن أن أي تقاطر أو انسكاب يبتعد عن الطعام الذي لن يُطهى مرة أخرى." }
        },
        {
          id: 'cc-q2',
          prompt: { en: "What is the main purpose of a color-coded cutting board system?", ar: "ما الغرض الرئيسي من نظام الألواح المرمّزة بالألوان؟" },
          options: [
            { id: 'a', text: { en: "To keep knives from getting dull", ar: "لمنع السكاكين من أن تصبح غير حادة" } },
            { id: 'b', text: { en: "To prevent cross-contamination between food types", ar: "لمنع التلوث المتبادل بين أنواع الأطعمة" } },
            { id: 'c', text: { en: "To make food spoil more slowly", ar: "لإبطاء فساد الطعام" } },
            { id: 'd', text: { en: "To organize staff shift schedules", ar: "لتنظيم جداول دوام الموظفين" } }
          ],
          correctOptionId: 'b',
          explanation: { en: "Assigning a dedicated color to each food type keeps bacteria from raw items from being transferred to boards or knives used for ready-to-eat food.", ar: "تخصيص لون معين لكل نوع من الأطعمة يمنع انتقال البكتيريا من الأصناف النيئة إلى الألواح أو السكاكين المستخدمة للأطعمة الجاهزة للأكل." }
        },
        {
          id: 'cc-q3',
          prompt: { en: "When should you wash your hands and change gloves during food handling?", ar: "متى يجب غسل اليدين وتغيير القفازات أثناء التعامل مع الطعام؟" },
          options: [
            { id: 'a', text: { en: "Only after touching raw meat", ar: "فقط بعد لمس اللحوم النيئة" } },
            { id: 'b', text: { en: "Once at the start of the shift", ar: "مرة واحدة في بداية الدوام" } },
            { id: 'c', text: { en: "Every time you switch between raw and ready-to-eat food", ar: "في كل مرة تنتقل فيها بين الأطعمة النيئة والجاهزة للأكل" } },
            { id: 'd', text: { en: "Only if your hands look visibly dirty", ar: "فقط إذا بدت يداك متسختين بوضوح" } }
          ],
          correctOptionId: 'c',
          explanation: { en: "Bacteria can transfer even when hands look clean, so hands and gloves must be changed every time you move between raw and ready-to-eat food.", ar: "يمكن أن تنتقل البكتيريا حتى عندما تبدو اليدان نظيفتين، لذا يجب تغيير اليدين والقفازات في كل مرة يتم فيها الانتقال بين الأطعمة النيئة والجاهزة للأكل." }
        },
        {
          id: 'cc-q4',
          prompt: { en: "What is the correct process for a surface between two different food tasks?", ar: "ما الإجراء الصحيح لسطح العمل بين مهمتين مختلفتين للطعام؟" },
          options: [
            { id: 'a', text: { en: "Sanitize only, without cleaning first", ar: "التطهير فقط دون التنظيف أولاً" } },
            { id: 'b', text: { en: "Clean first, then sanitize", ar: "التنظيف أولاً ثم التطهير" } },
            { id: 'c', text: { en: "Rinse with water only", ar: "الشطف بالماء فقط" } },
            { id: 'd', text: { en: "Wipe once with a dry cloth", ar: "المسح مرة واحدة بقطعة قماش جافة" } }
          ],
          correctOptionId: 'b',
          explanation: { en: "Cleaning removes visible dirt and food debris, while sanitizing then reduces bacteria to a safe level; skipping either step leaves the surface unsafe.", ar: "التنظيف يزيل الأوساخ وبقايا الطعام الظاهرة، ثم يخفض التطهير مستوى البكتيريا إلى حد آمن؛ وتخطي أي من الخطوتين يترك السطح غير آمن." }
        },
        {
          id: 'cc-q5',
          prompt: { en: "Why is it unsafe to use the same knife for raw chicken and then a salad without washing it?", ar: "لماذا يُعد استخدام نفس السكين للدجاج النيء ثم للسلطة دون غسله أمرًا غير آمن؟" },
          options: [
            { id: 'a', text: { en: "It dulls the blade faster", ar: "يجعل النصل غير حاد بشكل أسرع" } },
            { id: 'b', text: { en: "Bacteria from the raw chicken can transfer to food that will not be cooked again", ar: "يمكن أن تنتقل البكتيريا من الدجاج النيء إلى طعام لن يُطهى مرة أخرى" } },
            { id: 'c', text: { en: "It changes the taste of the salad", ar: "يغيّر طعم السلطة" } },
            { id: 'd', text: { en: "It is a matter of kitchen etiquette, not food safety", ar: "هو مسألة تتعلق بآداب المطبخ وليس بسلامة الغذاء" } }
          ],
          correctOptionId: 'b',
          explanation: { en: "Raw chicken can carry harmful bacteria, and since the salad will not be cooked, any bacteria transferred by the knife will not be destroyed before eating.", ar: "قد يحمل الدجاج النيء بكتيريا ضارة، وبما أن السلطة لن تُطهى، فإن أي بكتيريا تنتقل عبر السكين لن يتم القضاء عليها قبل تناولها." }
        }
      ]
    }
  },
  {
    id: 'allergen-awareness',
    title: { en: "Allergen Awareness", ar: "التوعية بمسببات الحساسية" },
    description: {
      en: "A closer look at the major food allergens, how to prevent cross-contact, and how to communicate allergen information safely to guests.",
      ar: "نظرة معمقة على أهم مسببات الحساسية الغذائية، وكيفية منع التلوث المتبادل، وكيفية إيصال معلومات الحساسية للضيوف بأمان."
    },
    groupIds: ['kitchen-staff', 'front-of-house', 'supervisors'],
    estimatedMinutes: 8,
    hasVideo: false,
    videoSrc: null,
    cards: [
      {
        id: 'aa-card-1',
        title: { en: "Know the Major Allergens", ar: "تعرّف على أهم مسببات الحساسية" },
        body: {
          en: "Most serious reactions come from a short list of foods: cereals with gluten, milk, eggs, fish, crustaceans, molluscs, peanuts, tree nuts, soybeans, sesame, celery, mustard, and sulphites. Even a trace amount can trigger a severe reaction in a sensitive guest, so treat every one of these ingredients with the same care.",
          ar: "تنشأ معظم ردود الفعل الخطيرة من قائمة محدودة من الأطعمة: الحبوب المحتوية على الغلوتين، والحليب، والبيض، والأسماك، والقشريات، والرخويات، والفول السوداني، والمكسرات، وفول الصويا، والسمسم، والكرفس، والخردل، والكبريتيت. حتى الكمية الضئيلة منها قد تسبب رد فعل شديدًا لدى ضيف حساس، لذا تعامل مع كل مكوّن من هذه المكونات بالحذر نفسه."
        },
        keyPoints: [
          { en: "Learn the full allergen list, not just the common ones", ar: "احفظ القائمة الكاملة لمسببات الحساسية وليس الشائعة منها فقط" },
          { en: "A trace amount can still cause a severe reaction", ar: "الكمية الضئيلة جدًا قد تسبب رد فعل شديدًا" },
          { en: "Treat all listed allergens with equal seriousness", ar: "تعامل مع جميع مسببات الحساسية المدرجة بالجدية نفسها" }
        ]
      },
      {
        id: 'aa-card-2',
        title: { en: "Preventing Cross-Contact", ar: "منع التلوث المتبادل" },
        body: {
          en: "Cross-contact happens when an allergen transfers from one food to another through shared boards, utensils, fryers, or unwashed hands. Use separate or freshly cleaned equipment for allergen-free orders, and store allergen ingredients on lower shelves away from other food. A wiped-down surface is not the same as a properly washed one.",
          ar: "يحدث التلوث المتبادل عندما ينتقل مسبب الحساسية من طعام إلى آخر عبر ألواح التقطيع أو الأدوات أو المقالي المشتركة أو الأيدي غير المغسولة. استخدم معدات منفصلة أو مُنظّفة حديثًا عند تحضير الطلبات الخالية من مسببات الحساسية، وخزّن مكونات مسببات الحساسية في الأرفف السفلية بعيدًا عن باقي الأطعمة. مسح السطح لا يغني عن غسله بالشكل الصحيح."
        },
        keyPoints: [
          { en: "Use dedicated or freshly washed equipment for allergen-free orders", ar: "استخدم معدات مخصصة أو مغسولة حديثًا للطلبات الخالية من مسببات الحساسية" },
          { en: "Store allergen ingredients below and apart from other food", ar: "خزّن مكونات مسببات الحساسية أسفل وبمعزل عن باقي الأطعمة" },
          { en: "Wiping a surface is not the same as washing it", ar: "مسح السطح ليس بديلاً عن غسله" }
        ]
      },
      {
        id: 'aa-card-3',
        title: { en: "Talking to Guests About Allergens", ar: "التواصل مع الضيوف حول مسببات الحساسية" },
        body: {
          en: "When a guest asks about allergens, never guess — check the recipe or ask the kitchen directly before answering. If you are unsure whether a dish is safe, tell the guest you will confirm rather than giving a reassuring but uncertain answer. A wrong guess can put someone's health at real risk.",
          ar: "عندما يسأل الضيف عن مسببات الحساسية، لا تخمّن أبدًا — تحقق من الوصفة أو اسأل المطبخ مباشرة قبل الإجابة. وإذا لم تكن متأكدًا من سلامة الطبق، أخبر الضيف بأنك ستتحقق بدلًا من إعطاء إجابة مطمئنة لكنها غير مؤكدة. فالتخمين الخاطئ قد يعرّض صحة الضيف لخطر حقيقي."
        },
        keyPoints: [
          { en: "Never guess — verify with the recipe or the kitchen", ar: "لا تخمّن أبدًا — تحقق من الوصفة أو من المطبخ" },
          { en: "Say you will confirm rather than give an uncertain answer", ar: "قل إنك ستتحقق بدلًا من تقديم إجابة غير مؤكدة" },
          { en: "A wrong answer can put a guest's health at risk", ar: "الإجابة الخاطئة قد تعرّض صحة الضيف للخطر" }
        ]
      },
      {
        id: 'aa-card-4',
        title: { en: "Reading Supplier Labels", ar: "قراءة بطاقات بيانات الموردين" },
        body: {
          en: "Ingredient formulas can change between deliveries, so check the label on every new batch rather than relying on memory. Pay close attention to 'may contain' and 'produced in a facility with' warnings, which signal a real risk of cross-contact even if the allergen is not a direct ingredient. Report any recipe or supplier change to your supervisor so allergen information stays accurate.",
          ar: "قد تتغير تركيبة المكونات بين شحنة وأخرى، لذا تحقق من البطاقة في كل دفعة جديدة ولا تعتمد على الذاكرة. انتبه جيدًا لعبارات مثل \"قد يحتوي على\" أو \"أُنتج في منشأة تستخدم\"، فهي تشير إلى خطر حقيقي للتلوث المتبادل حتى لو لم يكن مسبب الحساسية مكونًا مباشرًا. أبلغ المشرف عن أي تغيير في الوصفة أو المورّد لتبقى معلومات الحساسية دقيقة."
        },
        keyPoints: [
          { en: "Check the label on every new batch, not from memory", ar: "تحقق من البطاقة في كل دفعة جديدة وليس من الذاكرة" },
          { en: "Take 'may contain' warnings seriously", ar: "تعامل بجدية مع عبارات \"قد يحتوي على\"" },
          { en: "Report recipe or supplier changes to your supervisor", ar: "أبلغ المشرف عن أي تغيير في الوصفة أو المورّد" }
        ]
      }
    ],
    assessment: {
      passingScore: 70,
      questions: [
        {
          id: 'aa-q1',
          prompt: { en: "How much of an allergen can be enough to trigger a severe reaction in a sensitive guest?", ar: "ما مقدار مسبب الحساسية الكافي لإحداث رد فعل شديد لدى ضيف حساس؟" },
          options: [
            { id: 'a', text: { en: "Only a large, visible portion", ar: "كمية كبيرة وظاهرة فقط" } },
            { id: 'b', text: { en: "A trace amount", ar: "كمية ضئيلة جدًا" } },
            { id: 'c', text: { en: "Only if eaten on an empty stomach", ar: "فقط إذا تم تناولها على معدة فارغة" } },
            { id: 'd', text: { en: "Allergens only affect children", ar: "مسببات الحساسية تؤثر على الأطفال فقط" } }
          ],
          correctOptionId: 'b',
          explanation: { en: "Even a trace amount of an allergen can trigger a severe reaction, which is why strict handling is required.", ar: "حتى الكمية الضئيلة جدًا من مسبب الحساسية قد تسبب رد فعل شديدًا، ولهذا يجب التعامل معها بحذر شديد." }
        },
        {
          id: 'aa-q2',
          prompt: { en: "What is cross-contact?", ar: "ما المقصود بالتلوث المتبادل؟" },
          options: [
            { id: 'a', text: { en: "Cooking food at the wrong temperature", ar: "طهي الطعام بدرجة حرارة خاطئة" } },
            { id: 'b', text: { en: "An allergen transferring to another food via shared equipment or hands", ar: "انتقال مسبب حساسية إلى طعام آخر عبر معدات أو أيدٍ مشتركة" } },
            { id: 'c', text: { en: "Storing food past its expiry date", ar: "تخزين الطعام بعد تاريخ انتهاء صلاحيته" } },
            { id: 'd', text: { en: "Serving food that is too hot", ar: "تقديم طعام شديد السخونة" } }
          ],
          correctOptionId: 'b',
          explanation: { en: "Cross-contact occurs when an allergen moves from one food to another through shared boards, utensils, or hands.", ar: "يحدث التلوث المتبادل عندما ينتقل مسبب الحساسية من طعام إلى آخر عبر الألواح أو الأدوات أو الأيدي المشتركة." }
        },
        {
          id: 'aa-q3',
          prompt: { en: "A guest asks if a dish contains nuts and you are not sure. What should you do?", ar: "سألك ضيف إن كان الطبق يحتوي على مكسرات ولست متأكدًا. ماذا تفعل؟" },
          options: [
            { id: 'a', text: { en: "Say no, since nuts are usually not added", ar: "قل لا، لأن المكسرات لا تُضاف عادة" } },
            { id: 'b', text: { en: "Say yes to be safe, even without checking", ar: "قل نعم تحسبًا، دون التحقق" } },
            { id: 'c', text: { en: "Tell the guest you will confirm and check the recipe or kitchen", ar: "أخبر الضيف بأنك ستتحقق وراجع الوصفة أو اسأل المطبخ" } },
            { id: 'd', text: { en: "Ignore the question and move on", ar: "تجاهل السؤال وانتقل لأمر آخر" } }
          ],
          correctOptionId: 'c',
          explanation: { en: "You should never guess about allergens; confirm with the recipe or the kitchen before answering.", ar: "لا يجب أبدًا التخمين بشأن مسببات الحساسية؛ يجب التحقق من الوصفة أو من المطبخ قبل الإجابة." }
        },
        {
          id: 'aa-q4',
          prompt: { en: "A supplier label says 'may contain sesame.' What does this mean?", ar: "تحمل بطاقة أحد الموردين عبارة \"قد يحتوي على سمسم\". ماذا يعني ذلك؟" },
          options: [
            { id: 'a', text: { en: "The product definitely contains sesame as an ingredient", ar: "المنتج يحتوي بالتأكيد على السمسم كمكوّن" } },
            { id: 'b', text: { en: "There is a real risk of cross-contact with sesame and it should be treated seriously", ar: "هناك خطر حقيقي للتلوث المتبادل بالسمسم ويجب التعامل معه بجدية" } },
            { id: 'c', text: { en: "The warning can be ignored since sesame is not a listed ingredient", ar: "يمكن تجاهل التحذير لأن السمسم ليس مكونًا مدرجًا" } },
            { id: 'd', text: { en: "It only applies to guests with severe allergies", ar: "ينطبق فقط على الضيوف الذين لديهم حساسية شديدة" } }
          ],
          correctOptionId: 'b',
          explanation: { en: "'May contain' warnings signal a real risk of cross-contact during production and must be taken seriously for every guest.", ar: "تشير عبارة \"قد يحتوي على\" إلى خطر حقيقي للتلوث المتبادل أثناء الإنتاج ويجب أخذها على محمل الجد مع كل ضيف." }
        },
        {
          id: 'aa-q5',
          prompt: { en: "Why should you check the ingredient label on every new delivery instead of relying on memory?", ar: "لماذا يجب التحقق من بطاقة المكونات في كل شحنة جديدة بدلًا من الاعتماد على الذاكرة؟" },
          options: [
            { id: 'a', text: { en: "Because supplier formulas can change between deliveries", ar: "لأن تركيبة المورّد قد تتغير بين شحنة وأخرى" } },
            { id: 'b', text: { en: "Because labels are only accurate on the first delivery", ar: "لأن البطاقات تكون دقيقة في الشحنة الأولى فقط" } },
            { id: 'c', text: { en: "Because it is required for stock counting purposes", ar: "لأن ذلك مطلوب لأغراض جرد المخزون" } },
            { id: 'd', text: { en: "Because it speeds up the delivery process", ar: "لأن ذلك يسرّع عملية استلام الشحنة" } }
          ],
          correctOptionId: 'a',
          explanation: { en: "Ingredient formulas can change without notice, so every new batch needs its label checked rather than trusting memory.", ar: "قد تتغير تركيبة المكونات دون إشعار مسبق، لذا يجب التحقق من بطاقة كل دفعة جديدة بدلًا من الاعتماد على الذاكرة." }
        }
      ]
    }
  },
  {
    id: 'fire-safety',
    title: { en: "Fire Safety Training", ar: "التدريب على السلامة من الحرائق" },
    description: {
      en: "Essential fire safety knowledge for the workplace: how to respond in the first critical minutes, which extinguisher to use and how, and what keeps everyone - including hearing-impaired colleagues - safely warned and prepared.",
      ar: "معارف أساسية في السلامة من الحرائق في مكان العمل: كيفية الاستجابة في الدقائق الحرجة الأولى، وأي طفاية تُستخدم وكيف، وما الذي يضمن تنبيه الجميع - بمن فيهم الزملاء ذوو الإعاقة السمعية - وجاهزيتهم بأمان."
    },
    groupIds: ['kitchen-staff', 'front-of-house', 'delivery-drivers', 'warehouse-receiving', 'supervisors'],
    estimatedMinutes: 20,
    hasVideo: true,
    videoSrc: '/media/fire-safety-training.mp4',
    cards: [
      {
        id: 'fs-card-emergency-response',
        title: { en: "Emergency Response: Call 999", ar: "الاستجابة للطوارئ: اتصل بالرقم 999" },
        body: {
          en: "If a fire breaks out, call the civil defence emergency number, 999, without delay. A small, controllable fire can grow into a large one in about three minutes, so acting immediately - not waiting to see if it grows - is what keeps everyone safe.",
          ar: "عند اندلاع حريق، اتصل فوراً برقم الطوارئ الخاص بالدفاع المدني 999 دون تأخير. يمكن أن يتحول الحريق الصغير القابل للسيطرة عليه إلى حريق كبير خلال نحو ثلاث دقائق فقط، لذا فإن التصرف الفوري - وليس انتظار ما إذا كان سيكبر - هو ما يحافظ على سلامة الجميع."
        },
        keyPoints: [
          { en: "Call 999 immediately - it is the civil defence emergency number", ar: "اتصل بالرقم 999 فوراً - وهو رقم طوارئ الدفاع المدني" },
          { en: "A small fire can become a large one in about 3 minutes", ar: "يمكن أن يتحول الحريق الصغير إلى حريق كبير خلال حوالي 3 دقائق" },
          { en: "Do not wait to see if the fire grows before calling for help", ar: "لا تنتظر لترى إن كان الحريق سيكبر قبل طلب المساعدة" }
        ]
      },
      {
        id: 'fs-card-toxic-gases',
        title: { en: "The Real Danger: Smoke, Not Flame", ar: "الخطر الحقيقي: الدخان وليس اللهب" },
        body: {
          en: "It is easy to assume flames and heat are the biggest threat in a fire, but toxic gases and smoke inhalation cause most fire-related deaths, not direct burns. Smoke can disorient and incapacitate you before you even see flames, which is why getting clear of smoke matters as much as getting clear of fire.",
          ar: "من السهل افتراض أن اللهب والحرارة هما الخطر الأكبر في الحريق، لكن الغازات السامة واستنشاق الدخان هما السبب الرئيسي لمعظم الوفيات المرتبطة بالحرائق، وليس الحروق المباشرة. فقد يُفقدك الدخان القدرة على التصرف قبل أن ترى اللهب أصلاً، لذا فإن الابتعاد عن الدخان لا يقل أهمية عن الابتعاد عن النار."
        },
        keyPoints: [
          { en: "Toxic gases and smoke inhalation cause most fire deaths", ar: "الغازات السامة واستنشاق الدخان هما السبب الرئيسي لمعظم وفيات الحرائق" },
          { en: "Smoke can incapacitate you before flames are even visible", ar: "قد يُفقدك الدخان القدرة على التصرف قبل أن تظهر النيران أصلاً" },
          { en: "Getting clear of smoke matters as much as getting clear of flame", ar: "الابتعاد عن الدخان لا يقل أهمية عن الابتعاد عن اللهب" }
        ]
      },
      {
        id: 'fs-card-fire-classes',
        title: { en: "Know Your Fire Classes", ar: "تعرّف على فئات الحرائق" },
        body: {
          en: "Fires are grouped by what is burning, because that determines how to fight them safely. Class A covers ordinary combustibles like wood, paper, cloth, and rubber, while Class B covers flammable liquids such as oil, gasoline, and grease - and using the wrong response for the wrong class can make a fire worse rather than better.",
          ar: "تُصنَّف الحرائق حسب نوع المادة المشتعلة، لأن ذلك يحدد الطريقة الآمنة لمكافحتها. تشمل الفئة A المواد القابلة للاحتراق العادية مثل الخشب والورق والقماش والمطاط، بينما تشمل الفئة B السوائل القابلة للاشتعال مثل الزيت والبنزين والشحوم - واستخدام الاستجابة الخاطئة لفئة حريق غير مناسبة قد يزيد الحريق سوءاً بدلاً من إخماده."
        },
        keyPoints: [
          { en: "Class A: ordinary combustibles - wood, paper, cloth, rubber", ar: "الفئة A: المواد القابلة للاحتراق العادية - الخشب والورق والقماش والمطاط" },
          { en: "Class B: flammable liquids - oil, gasoline, grease", ar: "الفئة B: السوائل القابلة للاشتعال - الزيت والبنزين والشحوم" },
          { en: "The fire's class determines the safe way to respond to it", ar: "فئة الحريق هي التي تحدد طريقة التعامل الآمنة معه" }
        ]
      },
      {
        id: 'fs-card-choosing-extinguisher',
        title: { en: "Choosing the Right Extinguisher", ar: "اختيار الطفاية المناسبة" },
        body: {
          en: "Never use a water extinguisher on an oil fire. Water is denser than oil and sinks beneath it, instantly turning to steam and violently splashing burning oil outward - spreading the fire and making it worse instead of putting it out.",
          ar: "لا تستخدم أبداً طفاية الماء على حريق الزيت. فالماء أكثر كثافة من الزيت ويغوص أسفله، ليتحول فوراً إلى بخار ويقذف الزيت المشتعل للخارج بعنف - مما يؤدي إلى انتشار الحريق وزيادته سوءاً بدلاً من إخماده."
        },
        keyPoints: [
          { en: "Never use water on an oil fire", ar: "لا تستخدم الماء أبداً على حريق الزيت" },
          { en: "Water sinks beneath oil and turns to steam, splashing burning oil outward", ar: "يغوص الماء أسفل الزيت ويتحول إلى بخار، مما يقذف الزيت المشتعل للخارج" },
          { en: "The wrong extinguisher can spread a fire instead of stopping it", ar: "الطفاية الخاطئة قد تنشر الحريق بدلاً من إيقافه" }
        ]
      },
      {
        id: 'fs-card-using-extinguisher',
        title: { en: "Using an Extinguisher: PASS", ar: "استخدام الطفاية: PASS" },
        body: {
          en: "Remember PASS: Pull the pin, Aim the nozzle at the base of the fire, Squeeze the handle, and Sweep side to side. Also stand with the wind at your back so it pushes smoke and flames away from you rather than into your face.",
          ar: "تذكّر اختصار PASS: اسحب المسمار (Pull)، صوّب الفوهة (Aim) نحو قاعدة الحريق، اضغط على المقبض (Squeeze)، ثم حرّك الفوهة يميناً ويساراً (Sweep). كما يجب أن تقف بحيث تكون الريح خلف ظهرك، ليدفع الدخان واللهب بعيداً عنك بدلاً من دفعهما نحو وجهك."
        },
        keyPoints: [
          { en: "P-A-S-S: Pull the pin, Aim, Squeeze the handle, Sweep side to side", ar: "PASS: اسحب المسمار، صوّب الفوهة، اضغط على المقبض، حرّك الفوهة يميناً ويساراً" },
          { en: "Aim at the base of the fire, not the flames themselves", ar: "صوّب نحو قاعدة الحريق وليس نحو اللهب نفسه" },
          { en: "Stand with the wind at your back, not against it", ar: "قف بحيث تكون الريح خلف ظهرك، وليس في مواجهتها" }
        ]
      },
      {
        id: 'fs-card-detection-maintenance',
        title: { en: "Detection & Maintenance", ar: "الكشف والصيانة" },
        body: {
          en: "Fire extinguishers should be checked every 6 months to make sure they still work when needed - a fire is the wrong time to discover one has failed. Smoke detectors matter for every member of staff too: models with strobe lights or vibrating alerts make sure hearing-impaired colleagues are warned just as quickly as everyone else.",
          ar: "يجب فحص طفايات الحريق كل 6 أشهر للتأكد من أنها ما زالت تعمل عند الحاجة إليها - فوقت الحريق ليس الوقت المناسب لاكتشاف أن الطفاية معطلة. تهم كاشفات الدخان أيضاً كل فرد من فريق العمل: فالطرازات المزوّدة بأضواء وامضة أو إنذارات اهتزازية تضمن تنبيه الزملاء ذوي الإعاقة السمعية بالسرعة نفسها التي يُنبَّه بها الجميع."
        },
        keyPoints: [
          { en: "Check fire extinguishers every 6 months", ar: "افحص طفايات الحريق كل 6 أشهر" },
          { en: "Smoke detectors with strobe lights or vibrating alerts help hearing-impaired staff", ar: "كاشفات الدخان المزوّدة بأضواء وامضة أو إنذارات اهتزازية تساعد الموظفين ذوي الإعاقة السمعية" },
          { en: "A fire is the wrong time to discover an extinguisher has failed", ar: "وقت الحريق ليس الوقت المناسب لاكتشاف عطل الطفاية" }
        ]
      }
    ],
    assessment: {
      passingScore: 70,
      questions: [
        {
          id: 'fs-q1',
          prompt: { en: "Civil defense number in case of a fire emergency is?", ar: "رقم الدفاع المدني في حالة الحريق هو؟" },
          options: [
            { id: 'a', text: { en: "997", ar: "997" } },
            { id: 'b', text: { en: "998", ar: "998" } },
            { id: 'c', text: { en: "999", ar: "999" } }
          ],
          correctOptionId: 'c',
          explanation: { en: "999 is the civil defense emergency number for fire cases.", ar: "999 هو رقم الطوارئ الخاص بالدفاع المدني في حالات الحريق." }
        },
        {
          id: 'fs-q2',
          prompt: { en: "How long does it take a fire to change from a small one into a large fire?", ar: "كم من الوقت يلزم لتحول حريق صغير إلى حريق كبير؟" },
          options: [
            { id: 'a', text: { en: "3 min", ar: "3 دقائق" } },
            { id: 'b', text: { en: "10 min", ar: "10 دقائق" } },
            { id: 'c', text: { en: "20 min", ar: "20 دقيقة" } }
          ],
          correctOptionId: 'a',
          explanation: { en: "A fire can escalate from small and controllable to large within about 3 minutes, which is why quick response matters.", ar: "يمكن أن يتحول الحريق من صغير يمكن التحكم به إلى كبير خلال حوالي 3 دقائق فقط، لذلك سرعة الاستجابة مهمة جداً." }
        },
        {
          id: 'fs-q3',
          prompt: { en: "The main cause of casualties in case of fire is?", ar: "السبب الرئيسي للوفيات في حالة الحريق هو؟" },
          options: [
            { id: 'a', text: { en: "Heat and flame", ar: "الحرارة واللهب" } },
            { id: 'b', text: { en: "Toxic gases", ar: "الغازات السامة" } },
            { id: 'c', text: { en: "Falls", ar: "السقوط" } }
          ],
          correctOptionId: 'b',
          explanation: { en: "Toxic gases and smoke inhalation cause most fire-related deaths, not direct burns.", ar: "الغازات السامة واستنشاق الدخان هي السبب الرئيسي لمعظم الوفيات المرتبطة بالحرائق، وليس الحروق المباشرة." }
        },
        {
          id: 'fs-q4',
          prompt: { en: "A water fire extinguisher is not to be used on?", ar: "طفاية الماء يجب عدم استخدامها على؟" },
          options: [
            { id: 'a', text: { en: "Wood fires", ar: "حرائق الأخشاب" } },
            { id: 'b', text: { en: "Oil fires", ar: "حرائق الزيت" } },
            { id: 'c', text: { en: "Paper fires", ar: "حرائق الورق" } }
          ],
          correctOptionId: 'b',
          explanation: { en: "Water should never be used on oil fires as it can spread the burning oil and worsen the fire.", ar: "لا يجب استخدام الماء أبداً على حرائق الزيت لأن ذلك قد يؤدي إلى انتشار الزيت المشتعل وزيادة الحريق سوءاً." }
        },
        {
          id: 'fs-q5',
          prompt: { en: "When fighting fire with a fire extinguisher you should be?", ar: "عندما تكافح حريقاً فيجب أن تقف؟" },
          options: [
            { id: 'a', text: { en: "With wind direction", ar: "مع اتجاه الريح" } },
            { id: 'b', text: { en: "Against wind direction", ar: "عكس اتجاه الريح" } }
          ],
          correctOptionId: 'a',
          explanation: { en: "You should stand with the wind at your back so smoke and flames are pushed away from you.", ar: "يجب أن تقف مع اتجاه الريح بحيث تدفع الريح الدخان واللهب بعيداً عنك." }
        },
        {
          id: 'fs-q6',
          prompt: { en: "Smoke detectors are of no value for people with hearing disabilities.", ar: "كاشفات الدخان ليس لها قيمة للأشخاص ذوي الإعاقة السمعية؟" },
          options: [
            { id: 'a', text: { en: "True", ar: "صحيح" } },
            { id: 'b', text: { en: "False", ar: "خطأ" } }
          ],
          correctOptionId: 'b',
          explanation: { en: "Smoke detectors can be equipped with strobe lights or vibrating alerts, making them useful for people with hearing disabilities.", ar: "يمكن تجهيز كاشفات الدخان بأضواء وامضة أو إنذارات اهتزازية، مما يجعلها مفيدة للأشخاص ذوي الإعاقة السمعية." }
        },
        {
          id: 'fs-q7',
          prompt: { en: "A fire involving flammable liquids is classified as which type of fire?", ar: "الحريق الذي يشمل السوائل القابلة للاشتعال يصنف على أنه حريق؟" },
          options: [
            { id: 'a', text: { en: "Class A", ar: "الفئة A" } },
            { id: 'b', text: { en: "Class D", ar: "الفئة D" } },
            { id: 'c', text: { en: "Class B", ar: "الفئة B" } }
          ],
          correctOptionId: 'c',
          explanation: { en: "Class B fires involve flammable liquids such as oil, gasoline, and grease.", ar: "حرائق الفئة B تشمل السوائل القابلة للاشتعال مثل الزيت والبنزين والشحوم." }
        },
        {
          id: 'fs-q8',
          prompt: { en: "How frequent should the fire extinguishers be checked?", ar: "ما هي المدة الواجبة لإعادة فحص طفايات الحريق؟" },
          options: [
            { id: 'a', text: { en: "Every year", ar: "سنوياً" } },
            { id: 'b', text: { en: "Every 6 months", ar: "كل 6 أشهر" } },
            { id: 'c', text: { en: "Every 3 months", ar: "كل 3 أشهر" } }
          ],
          correctOptionId: 'b',
          explanation: { en: "Fire extinguishers should be inspected every 6 months to ensure they remain functional.", ar: "يجب فحص طفايات الحريق كل 6 أشهر للتأكد من أنها ما زالت تعمل بكفاءة." }
        },
        {
          id: 'fs-q9',
          prompt: { en: "The correct steps in operating a fire extinguisher are represented by the letters P.A.S.S. What do the letters stand for?", ar: "الخطوات الصحيحة لتشغيل طفاية الحريق تتمثل في اتباع الاختصار PASS، ما معنى الحروف؟" },
          options: [
            { id: 'a', text: { en: "Panic, Alarm others, Spot fire, Secure area", ar: "هلع، نادِ على الآخرين، حدد مكان الحريق، أمّن المنطقة" } },
            { id: 'b', text: { en: "Point the nozzle, Alert others, Squeeze nozzle, Share information", ar: "وجّه الفوهة، نبّه الآخرين، اضغط على الفوهة، شارك المعلومات" } },
            { id: 'c', text: { en: "Pull pin, Aim nozzle, Squeeze handle/trigger, Sweep nozzle", ar: "اسحب المسمار، صوّب الفوهة، اضغط على المقبض، حرّك الفوهة" } },
            { id: 'd', text: { en: "Pour contents, Arrive at fire, Share work with others, Squeeze", ar: "اسكب المحتويات، صل إلى الحريق، شارك العمل مع الآخرين، اضغط" } }
          ],
          correctOptionId: 'c',
          explanation: { en: "PASS stands for Pull the pin, Aim the nozzle, Squeeze the handle/trigger, and Sweep the nozzle side to side.", ar: "اختصار PASS يعني: اسحب المسمار، صوّب الفوهة، اضغط على المقبض، ثم حرّك الفوهة يميناً ويساراً." }
        },
        {
          id: 'fs-q10',
          prompt: { en: "Many different materials could be burning in a class \"A\" fire. Pick the best choice from the list below.", ar: "تصنف حرائق الفئة A طبقاً للمواد المحترقة – اختر أفضل هذه المواد من القائمة الآتية؟" },
          options: [
            { id: 'a', text: { en: "Rubber", ar: "مطاط" } },
            { id: 'b', text: { en: "Diesel", ar: "ديزل" } },
            { id: 'c', text: { en: "Electronics", ar: "الكترونيات" } },
            { id: 'd', text: { en: "Flammable metal", ar: "معادن قابلة للاشتعال" } }
          ],
          correctOptionId: 'a',
          explanation: { en: "Class A fires involve ordinary combustible materials like wood, paper, cloth, and rubber.", ar: "حرائق الفئة A تشمل المواد القابلة للاحتراق العادية مثل الخشب والورق والقماش والمطاط." }
        }
      ]
    }
  }
];
