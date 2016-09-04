using System;
using System.Threading;

namespace Core
{
    public class Application
    {
        private volatile bool _running = true;

        private int _killCount = 0;
        public void Run()
        {
            Console.WriteLine("Starting Application Thread");
            while (_running)
            {
                Thread.Sleep(1000);
                _killCount++;

                if (_killCount >= 10)
                {
                    _running = false;
                }
            }

            Console.WriteLine("Ending Application Thread");
        }
    }
}