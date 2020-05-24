# Generated by Django 3.0 on 2020-05-24 13:31

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Food',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('measure', models.DecimalField(decimal_places=2, max_digits=8)),
                ('unit', models.CharField(max_length=200)),
                ('grams', models.DecimalField(decimal_places=2, max_digits=8)),
                ('calories', models.DecimalField(decimal_places=2, max_digits=8)),
                ('protein', models.DecimalField(decimal_places=2, max_digits=8)),
                ('carbs', models.DecimalField(decimal_places=2, max_digits=8)),
                ('fiber', models.DecimalField(decimal_places=2, max_digits=8)),
                ('fat', models.DecimalField(decimal_places=2, max_digits=8)),
                ('sat_fat', models.DecimalField(decimal_places=2, max_digits=8)),
            ],
        ),
        migrations.CreateModel(
            name='Log',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('portion', models.PositiveSmallIntegerField()),
                ('date', models.DateField()),
                ('food', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='food', to='logs.Food')),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='logs', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]