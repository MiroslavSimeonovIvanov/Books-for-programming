/* Напишете програма, използваща функция hypot(), връщаща
 * дължината на хипотенузата на правоъгълен триъгълник.
 * Аргументите й са дължините на двата противоположни катета.
 * Нека типът на функцията да бъде double. Типът на параметрите
 * също да бъде double. Демонстрирайте функцията в програма.
 * (Питагоровата теорема гласи, че квадратът от дължината на хипотенузата
 * е равен на сбора от квадратите на прилежащите катети.) 
 */

using System;

class RightTriangle
{
    // Creating the hypotenuse method that will calculate it based on the two catheti.
    static double Hypotenuse(double a, double b)
    {
        double c = Math.Sqrt(Math.Pow(a, 2) + Math.Pow(b, 2));
        return c;
    }
    static void Main()
    {
        // Here we want from the user to enter the catheti.
        Console.Write("a = ");
        double cathetusA = double.Parse(Console.ReadLine());

        Console.Write("b = ");
        double cathetusB = double.Parse(Console.ReadLine());

        // Print the result.
        Console.WriteLine("c = {0}", Hypotenuse(cathetusA, cathetusB));
    }
}
