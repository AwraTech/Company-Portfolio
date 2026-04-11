import { Router, Request, Response } from 'express';
import Groq from 'groq-sdk';
import { AWRA_SYSTEM_PROMPT } from '../awraContext';

const router = Router();

router.post('/', async (req: Request, res: Response) => {
  const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
  try {
    const { messages } = req.body;

    if (!Array.isArray(messages) || messages.length === 0) {
      res.status(400).json({ error: 'messages array is required' });
      return;
    }

    const completion = await groq.chat.completions.create({
      model: 'llama-3.3-70b-versatile',
      messages: [
        { role: 'system', content: AWRA_SYSTEM_PROMPT },
        ...messages,
      ],
      max_tokens: 512,
      temperature: 0.7,
    });

    const reply = completion.choices[0]?.message?.content ?? 'Sorry, I could not generate a response.';
    res.json({ reply });
  } catch (error) {
    console.error('Groq error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
